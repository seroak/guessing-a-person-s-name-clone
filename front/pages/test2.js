import React, { useRef, useEffect } from "react";

function MyButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus(); // 컴포넌트가 마운트될 때 버튼에 포커스를 줍니다.
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.

  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
    // 버튼이 클릭되었을 때 원하는 동작을 수행할 수 있습니다.
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 폼의 기본 제출 동작 방지
      alert("버튼이 클릭되었습니다!"); // 버튼 클릭 핸들러 호출
    }
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick} onKeyPress={handleKeyPress}>
        버튼
      </button>
    </div>
  );
}

export default MyButton;
