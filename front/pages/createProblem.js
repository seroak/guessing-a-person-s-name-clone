import React, { useState, useRef, useEffect } from "react";

import AppLayout from "../components/AppLayout";
import styles from "./createProblem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProblem,
  getProblem,
  uploadImage,
  updateProblem,
  deleteProblem,
} from "../reducers/problem";
import { loadUser } from "../reducers/user";
import ShortUniqueId from "short-unique-id";
import _ from "lodash";
import { useRouter } from "next/router";
import wrapper from "../store/configureStore";
import axios from "axios";

const createProblem = () => {
  const { problemList, imagePath } = useSelector((state) => state.problem);
  const { me } = useSelector((state) => state.user);
  const uid = new ShortUniqueId({ length: 10 });
  const [inputData, setInputData] = useState([]);
  const [imageIdx, setImageIdx] = useState([]);
  const inputRefs = useRef([]);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!(me && me.id)) {
      router.push("/");
    }
  }, [me && me.id]);
  // 사진만 먼저 저장해서 가지고 오는 과정
  const handleImageChange = async (index, event) => {
    const imageFormData = new FormData();
    const file = event.target.files[0];
    imageFormData.append("image", file);
    dispatch(uploadImage(imageFormData));
    //newInputData[index].previewURL = 백엔드에 저장되어있는 사진 프리뷰
    setImageIdx(index); // 수정할 사진의 인덱스를 저장
  };
  // 사진이 변경된 이후 변경된 경로를 inputData에 수정하는 코드
  useEffect(() => {
    // useState는 2차원 배열 부터는 [...inputData]이런식으로 복사 안된다
    // 그래서 loadsh로 cloneDeep을 하던가 다른 방법으로 깊은 복사를 해야한다
    let newInputData = _.cloneDeep(inputData);
    if (newInputData.length !== 0) {
      newInputData[imageIdx].Image = imagePath;
      setInputData(newInputData);
    }
  }, [imagePath]);

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, []);

  useEffect(() => {
    dispatch(getProblem());
  }, []);
  //getProblem을 실행하고  problemList 갱신
  //데이터베이스의 변경으로 problemList가 변경되도
  useEffect(() => {
    setInputData(problemList);
  }, [problemList]); // 의존성 배열이 빈 배열로 설정됨

  useEffect(() => {
    if (inputData.length === 0) {
      setInputData([
        ...inputData,
        {
          ProblemId: uid.rnd(),
          Image: "",
          Name1: "",
          Name2: "",
          Name3: "",
          Name4: "",
        },
      ]);
    }
  }, [inputData]);

  const handleTextChange = (index, fieldName, value) => {
    let newInputData = _.cloneDeep(inputData);
    newInputData[index][fieldName] = value;
    setInputData(newInputData);
  };

  const addInput = () => {
    setInputData([
      ...inputData,
      {
        ProblemId: uid.rnd(),
        Image: "",
        Name1: "",
        Name2: "",
        Name3: "",
        Name4: "",
      },
    ]);
  };

  const removeInput = (index) => {
    const newInputData = [...inputData];
    dispatch(deleteProblem({ ProblemId: newInputData[index].ProblemId }));
    newInputData.splice(index, 1);

    setInputData(newInputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 모든 입력 값을 처리하는 로직을 수행할 수 있습니다.

    let flag = false;
    inputData.forEach((input) => {
      const trimmedName1 = input.Name1.trim();
      if (input.Image == null || trimmedName1 == "") {
        if (!flag) {
          // flag가 false인 경우에만 alert를 실행합니다.
          alert("사진과 이름 후보 1을 작성해주세요");
          flag = true; // flag를 true로 설정하여 다음에는 alert가 실행되지 않도록 합니다.
        }
        return false; // forEach 루프를 멈추기 위해 false를 반환합니다.
      }
    });
    // 사진과 이름 후보1을 작성을 안하면 아래 코드가 실행안되게 하는 코드
    if (flag === true) {
      return;
    }

    inputData.forEach((input, index) => {
      const trimmedName1 = input.Name1.trim();
      const trimmedName2 = input.Name2.trim();
      const trimmedName3 = input.Name3.trim();
      const trimmedName4 = input.Name4.trim();

      if (problemList.find((item) => item.ProblemId === input.ProblemId)) {
        // 문제아이디가 있는경우 즉 수정해야 하는 경우
        dispatch(
          updateProblem({
            ProblemId: input.ProblemId,
            Image: input.Image,
            Name1: trimmedName1,
            Name2: trimmedName2,
            Name3: trimmedName3,
            Name4: trimmedName4,
          })
        );
      } else {
        // 문제아이디가 없는 경우 즉 만들어야하는 경우
        dispatch(
          addProblem({
            ProblemId: input.ProblemId,
            Image: input.Image,
            Name1: trimmedName1,
            Name2: trimmedName2,
            Name3: trimmedName3,
            Name4: trimmedName4,
          })
        );
      }
    });
    dispatch(getProblem());
    router.push("/");
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index, e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageChange(index, { target: { files: [files[0]] } });
    }
  };
  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>이미지 및 텍스트 입력 폼</h1>
          {inputData.map((input, index) => (
            <div
              className={styles.create}
              key={index}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(index, e)}
            >
              <label
                className={styles.label}
                style={{
                  display: "inline-block",
                  padding: "10px 15px",
                  backgroundColor: "#E8E7E7",
                  color: "black",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s",
                }}
              >
                <div>이미지 업로드</div>

                <input
                  name="image"
                  type="file"
                  onChange={(e) => handleImageChange(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  style={{
                    display: "none",
                  }}
                />

                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  {input.Image && (
                    <img
                      src={`http://localhost:3065/${input.Image}`}
                      alt={`Preview ${index}`}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                      }}
                    />
                  )}
                </div>
              </label>
              <label>
                이름 후보 1
                <input
                  className={styles.input}
                  type="text"
                  value={input.Name1}
                  onChange={(e) =>
                    handleTextChange(index, "Name1", e.target.value)
                  }
                />
              </label>

              <label>
                이름 후보 2
                <input
                  className={styles.input}
                  type="text"
                  value={input.Name2}
                  onChange={(e) =>
                    handleTextChange(index, "Name2", e.target.value)
                  }
                />
              </label>
              <label>
                이름 후보 3
                <input
                  className={styles.input}
                  type="text"
                  value={input.Name3}
                  onChange={(e) =>
                    handleTextChange(index, "Name3", e.target.value)
                  }
                />
              </label>

              <label>
                이름 후보 4
                <input
                  className={styles.input}
                  type="text"
                  value={input.Name4}
                  onChange={(e) =>
                    handleTextChange(index, "Name4", e.target.value)
                  }
                />
              </label>
              <div>
                <button
                  onClick={() => removeInput(index)}
                  className={styles.erase}
                  type="button"
                >
                  지우기
                </button>
              </div>
            </div>
          ))}
          <button className={styles.button} onClick={addInput} type="button">
            만들기
          </button>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
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

export default createProblem;
