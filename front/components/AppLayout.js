import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./AppLayout.module.css";
import useToggle from "../hook/useToggle";
import Login from "./Login";
import Signup from "./Signup";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { toggleLogin, toggleSignUp } from "../reducers/page";
import Link from "next/link";

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const { me } = useSelector((state) => state.user);
  const { logInButton, signUpButton } = useSelector((state) => state.page);
  const handleButtonClick = useCallback((buttonNumber) => {
    if (buttonNumber === "A") {
      dispatch(toggleLogin(logInButton));
    } else if (buttonNumber === "B") {
      dispatch(toggleSignUp(signUpButton));
    }
  });

  return (
    <div>
      <div className={styles.header}>
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.logo}> 예능 게임 모음</div>
        </Link>
        {me ? (
          <div className={styles.user}>
            <div>{me.nickname}님 환영합니다</div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(logout())}
            >
              로그아웃
            </div>
          </div>
        ) : (
          <div className={styles.login_logout}>
            <div
              className={styles.pointer}
              onClick={() => handleButtonClick("A")}
            >
              로그인
            </div>
            <div
              className={styles.pointer}
              onClick={() => handleButtonClick("B")}
            >
              회원가입
            </div>
          </div>
        )}
      </div>

      {logInButton ? (
        <div className={styles.login_page}>
          <a
            className={styles.login_close}
            onClick={() => handleButtonClick("A")}
          >
            X
          </a>
          <Login />
        </div>
      ) : null}
      {signUpButton ? (
        <div className={styles.login_page}>
          <Signup />
          <a
            className={styles.login_close}
            onClick={() => handleButtonClick("B")}
          >
            X
          </a>
        </div>
      ) : null}
      {children}
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
