import React, { useState, useRef } from "react";

const DynamicInputsForm = () => {
  function hasDuplicate(arr) {
    return (
      arr.find(
        (item, index) =>
          arr.findIndex(
            (el, idx) =>
              JSON.stringify(el) === JSON.stringify(item) && idx !== index
          ) !== -1
      ) !== undefined
    );
  }

  // 테스트
  const arr1 = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ];

  const arr2 = [
    { id: 1, name: "John" },
    { id: 5, name: "Jane" },
    { id: 6, name: "John" },
  ];

  arr1.forEach((input, index) => {
    if (arr2.find((item) => item.id === input.id)) {
      console.log("있다");
    } else {
      console.log("없다");
    }
  });
  return (
    <div>
      <h1>이미지 및 텍스트 입력 폼</h1>
    </div>
  );
};

export default DynamicInputsForm;
