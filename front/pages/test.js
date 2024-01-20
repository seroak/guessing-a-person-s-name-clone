import React, { useState, useEffect } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(10); // 초기 카운트다운 값

  useEffect(() => {
    let intervalId;
    if (countdown > 0) {
      console.log("다시 실행");
      // 카운트다운이 실행 중일 때만 setInterval을 설정

      intervalId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      // 컴포넌트가 언마운트될 때 clearInterval 호출
      return () => {
        console.log("종료");
        clearInterval(intervalId);
      };
    } else {
      clearInterval(intervalId);
    }
  }, [countdown]); // isRunning 상태가 변경될 때마다 useEffect가 호출됨

  return (
    <div>
      <p>Countdown: {countdown > 0 ? <>{countdown}</> : <>카운트 끝</>}</p>
    </div>
  );
};

export default CountdownTimer;
