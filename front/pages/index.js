import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import styles from "./index.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loadUser } from "../reducers/user";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <AppLayout>
      <main className={styles.main}>
        <section className={styles.title}>
          <h1>도전</h1>
          <p className={styles.comment}>made by 이규열</p>
        </section>
        <section className={styles.choice}>
          <ul id={styles.games}>
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
