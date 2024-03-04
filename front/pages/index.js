import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import styles from "./index.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../reducers/user";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
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
export default Home;
