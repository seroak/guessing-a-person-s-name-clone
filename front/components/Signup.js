import React, { useState, useEffect } from "react";

import styles from "./Signup.module.css";
import useToggle from "../hook/useToggle";
import { signUp } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, toggleSignUp } from "../reducers/page";
const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpDone, signUpError } = useSelector((state) => state.user);
  const { signUpButton } = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 여기서 실제로 서버로 로그인 요청을 보낼 수 있습니다.
    // 예제에서는 단순히 콘솔에 출력합니다.
    if (nickname.match(/\s/g)) {
      alert("nickname에 공백이 존재합니다");
      return;
    }
    if (email.match(/\s/g)) {
      alert("email에 공백이 존재합니다");
      return;
    }
    if (password.match(/\s/g)) {
      alert("password에 공백이 존재합니다");
      return;
    }
    console.log("Logging in with:", { nickname, email, password });
    if (nickname !== "" && email !== "" && password !== "") {
      dispatch(signUp({ nickname, email, password }));
    }
  };
  useEffect(() => {
    if (signUpDone) {
      dispatch(toggleSignUp(signUpButton));
    }
  }, [signUpDone]);
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  return (
    <>
      <div className={styles.signup_component}>
        <form onSubmit={handleSubmit}>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            nickname
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
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
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: 17.7, marginRight: 18 }}
            />
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" style={{ cursor: "pointer" }}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
