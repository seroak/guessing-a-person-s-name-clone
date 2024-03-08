import React, { useState, useEffect, useRef } from "react";
import AppLayout from "../components/AppLayout";
import styles from "./guessPerson.module.css";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Router from "next/router";
import Head from "next/head";
import { problemAction } from "../reducers/game";
import { loadUser } from "../reducers/user";
import wrapper from "../store/configureStore";
import axios from "axios";
const GuessPerson = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  // 문제를 시작하는 카운트 다운 변수
  const [count, setCount] = useState(3);
  // 카운트 다운 시작 조절 false면 시간이 돌지 않고 true면 시간이 카운트 된다
  const [isStarting, setIsStarting] = useState(false);
  // 문제 푸는 시간을 카운트다운하는 변수
  const [problemTime, setProblemTime] = useState(1);
  // 카운트 마운트를 담당하는 변수
  // setInterval이 변수에 남지 않게 조절하는 역할을
  const [isTimer, setIsTimer] = useState(false);
  // 시작 버튼을 누르면 카운트가 시작되고 카운트가 끝나면 게임이 시작된다
  // 카운트 시작 표시하는 변수
  const [isCountStart, setCountStart] = useState(false);
  // 게임 시작하는거 표시하는 변수
  const [isGameStart, setGameStart] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  // 게임을 다시 시작했을 때 멘트 변경
  const [resume, setResume] = useState(false);
  const { problem } = useSelector((state) => state.game);
  // 문제가 다 끝나면 표시하는 변수
  const [finish, setFinish] = useState(false);
  // 점수 채크 state
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, []);

  useEffect(() => {
    dispatch(problemAction());
    console.log(problem);
  }, []);
  // 게임 시작 카운트다운
  useEffect(() => {
    let timer;

    if (isStarting) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount > 0 ? prevCount - 1 : 0;

          // 여기서 setIsTimer를 호출하여 count가 0이 되었을 때 실행
          if (newCount === 0) {
            setIsTimer(true);
            setIsStarting(false);
            setGameStart(true);
            clearInterval(timer);
          }
          return newCount;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStarting]);

  // 문제 시간 카운트다운
  useEffect(() => {
    let timer;

    if (isTimer) {
      timer = setInterval(() => {
        setProblemTime((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimer]);

  const handelSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // 문제 답 입력하는 함수 부분
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyUp = (event) => {
    // 엔터키(Enter key)의 keyCode는 13입니다.
    if (event.keyCode === 13) {
      checkValue();
    }
  };
  const checkValue = () => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue !== "") {
      if (problem[score].name_candi.includes(trimmedValue)) {
        setScore((prev) => prev + 1);
        setProblemTime(selectedOption);
        setInputValue(" ");
      } else {
        setIsCorrect(false);
        setInputValue(" ");
      }
    }
  };

  const gamestart = (event) => {
    setIsStarting(true);
    setProblemTime(selectedOption);
    setCountStart(true);
  };
  // 문제 시간이 다 되면 종료하는 기능
  useEffect(() => {
    if (problemTime === 0) {
      handleTimeout();
    }
  }, [problemTime]);
  // 문제 시간이 종료되어서 틀렸다는 표시를 하는 함수
  const handleTimeout = () => {
    setIsCorrect(false);
  };
  // 문제를 다 맞추면
  useEffect(() => {
    if (isGameStart) {
      if (score === problem.length) {
        setFinish(true);
        setIsTimer(false);
      }
    }
  }, [score, problem, isGameStart]);

  // 문제를 틀리고 다시 시작할때
  const restart = () => {
    setCountStart(true);
    setGameStart(false);
    setIsCorrect(true);
    setIsTimer(false);
    setIsStarting(true);
    setCount(3);
    setProblemTime(selectedOption);
    setResume(true);
    // 문제가져오기
    dispatch(problemAction());
    // 점수 초기화
    setScore(0);
    setFinish(false);
    setInputValue("");
  };
  // 문제를 다 맞히고 다시 시작할 때
  const clear_restart = () => {
    setCountStart(true);
    setGameStart(false);
    setIsCorrect(true);
    setIsTimer(false);
    setIsStarting(true);
    setCount(3);
    setProblemTime(selectedOption);
    setResume(false);
    // 문제가져오기
    dispatch(problemAction());
    // 점수 초기화
    setScore(0);
    setFinish(false);
    setInputValue("");
  };

  return (
    <>
      <Head>
        <title>사람이름 맞추기</title>
      </Head>
      <AppLayout>
        <main className={styles.main}>
          <div className={styles.title}>
            <h1>인물 퀴즈</h1>
            <div className={styles.limit}>
              제한시간은
              <select
                className={styles.time_limit}
                value={selectedOption}
                onChange={handelSelectChange}
              >
                <option value="1">1초</option>
                <option value="2">2초</option>
                <option value="3">3초 (영석이 형)</option>
                <option value="4">4초</option>
                <option value="5">5초</option>
                <option value="6">6초</option>
                <option value="7">7초</option>
              </select>
              입니다
            </div>
          </div>
          <div className={styles.name}>
            {isCountStart ? (
              isGameStart ? (
                finish ? (
                  <>
                    <div>끝</div>
                  </>
                ) : (
                  <img
                    id="img"
                    src={problem.length > 0 ? problem[score]?.src : ""}
                  />
                )
              ) : (
                <div>{count}</div>
              )
            ) : (
              <img id="img" src="./기본.png" />
            )}
          </div>

          <div className={styles.container2}>
            {isGameStart ? (
              isCorrect ? (
                finish ? (
                  <>
                    <div className={styles.result} style={{ fontSize: 40 }}>
                      전부 다 맞히셨습니다!
                    </div>
                    <div className={styles.record} style={{ fontSize: 50 }}>
                      점수: {score}
                    </div>
                    <div className={styles.a}>
                      <button
                        className={styles.restart}
                        onClick={clear_restart}
                      >
                        다시!
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.input}>
                      <input
                        type="text"
                        className={styles.answer}
                        placeholder="입력하세요"
                        onKeyUp={handleKeyUp}
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={inputValue}
                      />
                      <br />
                      <button className={styles.submit} onClick={checkValue}>
                        Enter
                      </button>
                    </div>
                    <div className={styles.introduction}>
                      남은시간{problemTime}
                    </div>

                    <div className={styles.record}>점수: {score}</div>
                  </>
                )
              ) : (
                <>
                  <div className={styles.result}>땡!</div>
                  <div className={styles.explain}>
                    정답은 {problem[score].name} 입니다
                  </div>
                  <div className={styles.record} style={{ fontSize: 50 }}>
                    점수: {score}
                  </div>
                  <div className={styles.a}>
                    <button className={styles.restart} onClick={restart}>
                      다시!
                    </button>
                  </div>
                </>
              )
            ) : (
              <>
                <div className={styles.input}>
                  <input
                    type="text"
                    className={styles.answer}
                    placeholder="입력하세요"
                    onKeyUp={handleKeyUp}
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                  <br />
                  <button className={styles.submit} onClick={checkValue}>
                    Enter
                  </button>
                </div>
                <div className={styles.introduction}></div>
                <div className={styles.record}>점수: {score}</div>
                <div className={styles.button}>
                  {resume ? (
                    <div style={{ fontSize: 30 }}>이번에는 맞춰봐요</div>
                  ) : (
                    <form>
                      <button
                        className={styles.start}
                        type="button"
                        onClick={gamestart}
                        style={{ cursor: "pointer" }}
                      >
                        시작
                      </button>
                    </form>
                  )}
                </div>
              </>
            )}
          </div>
        </main>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      // 쿠키가 브라우저에 있는경우만 넣어서 실행
      // (주의, 아래 조건이 없다면 다른 사람으로 로그인 될 수도 있음)
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(loadUser());
    }
);
export default GuessPerson;
