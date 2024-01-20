import React, { useState } from "react";

import styles from "./Signup.module.css";
import useToggle from "../hook/useToggle";

const handleSubmit = async (e) => {
  e.preventDefault();

  // 여기서 실제로 서버로 로그인 요청을 보낼 수 있습니다.
  // 예제에서는 단순히 콘솔에 출력합니다.
  console.log("Logging in with:", { username, password });
};
const Signup = () => {
  const [islogin, login] = useToggle();
  const [isSignup, signup] = useToggle();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles.signup_component}>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: 17.7, marginRight: 18 }}
            />
          </label>
          <br />
          <label>
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
