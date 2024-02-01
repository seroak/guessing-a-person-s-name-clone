import React, { useState, useEffect } from "react";

import styles from "./Login.module.css";
import useToggle from "../hook/useToggle";
import useInput from "../hook/useInput";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { loginAction } from "../reducers/user";
import { toggleLogin } from "../reducers/page";

const Login = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassWord] = useInput("");
  const { logInError } = useSelector((state) => state.user);
  const { logInButton } = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAction({ email, password }));
    dispatch(toggleLogin(logInButton));
  };

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  return (
    <>
      <div className={styles.login_component}>
        <form onSubmit={handleSubmit}>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>Email</div>
            <input type="text" value={email} onChange={onChangeEmail} />
          </label>
          <br />
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
