import React, { useState } from "react";

import styles from "./Login.module.css";
import useToggle from "../hook/useToggle";
import useInput from "../hook/useInput";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { loginAction } from "../reducers/user";
import { toggleLogin } from "../reducers/page";

const Login = () => {
  const [username, onChangeUserName] = useInput("");
  const [password, onChangePassWord] = useInput("");
  const { logInDone } = useSelector((state) => state.user);
  const { logInButton } = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAction({ username, password }));

    dispatch(toggleLogin(logInButton));

    // 여기서 실제로 서버로 로그인 요청을 보낼 수 있습니다.
    // 예제에서는 단순히 콘솔에 출력합니다.
  };

  return (
    <>
      <div className={styles.login_component}>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input type="text" value={username} onChange={onChangeUserName} />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={onChangePassWord}
            />
          </label>
          <br />
          <button type="submit" style={{ cursor: "pointer" }}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
