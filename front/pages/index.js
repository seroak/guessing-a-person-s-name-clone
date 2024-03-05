import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import styles from "./index.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../reducers/user";
import wrapper from "../store/configureStore";
import axios from "axios";
const Home = () => {
  // const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch(loadUser());
  // }, []);
  const handleLinkClick = (e) => {
    if (me === null) {
      e.preventDefault();
      alert("로그인이 필요합니다");
    }
  };
  return (
    <AppLayout>
      <main className={styles.main}>
        <section className={styles.title}>
          <h1>도전</h1>
          <p className={styles.comment}>made by 이규열</p>
        </section>
        <section className={styles.choice}>
          <ul className={styles.games}>
            <Link
              href="/guessPerson"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={styles.gameList}>
                인물
                <br />
                퀴즈
              </li>
            </Link>
            <Link
              href="/createProblem"
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleLinkClick}
            >
              <li className={styles.gameList}>
                문제
                <br />
                생성
              </li>
            </Link>
            <Link
              href="/customProblem"
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleLinkClick}
            >
              <li className={styles.gameList}>
                커스텀
                <br />
                문제
              </li>
            </Link>
          </ul>
        </section>
      </main>
    </AppLayout>
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
export function reportWebVitals(metric) {
  console.log(metric);
}

export default Home;
