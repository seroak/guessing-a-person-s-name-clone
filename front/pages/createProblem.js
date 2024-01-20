import React, { useState, useRef } from "react";

import AppLayout from "../components/AppLayout";
import styles from "./createProblem.module.css";
import { useDispatch } from "react-redux";
import { addProblem } from "../reducers/probelm";
import Link from "next/link";

const createProblem = () => {
  const [inputData, setInputData] = useState([
    { image: null, text1: "", text2: "", text3: "", text4: "", previewURL: "" },
  ]);

  const inputRefs = useRef([]);
  const dispatch = useDispatch();

  const handleImageChange = (index, event) => {
    const newInputData = [...inputData];
    const file = event.target.files[0];

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      newInputData[index].image = file;
      newInputData[index].previewURL = reader.result;
      setInputData(newInputData);
    };
  };

  const handleTextChange = (index, fieldName, value) => {
    const newInputData = [...inputData];
    newInputData[index][fieldName] = value;
    setInputData(newInputData);
  };

  const addInput = () => {
    setInputData([
      ...inputData,
      {
        image: null,
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        previewURL: "",
      },
    ]);
  };

  const removeInput = (index) => {
    const newInputData = [...inputData];
    newInputData.splice(index, 1);
    setInputData(newInputData);
  };

  const handleSubmit = () => {
    // 여기에서 모든 입력 값을 처리하는 로직을 수행할 수 있습니다.
    console.log(inputData);

    let flag = false;
    inputData.forEach((input) => {
      const trimmedText1 = input.text1.trim();
      if (input.image == null || trimmedText1 == "") {
        alert("사진과 이름 후보 1을 작성해주세요");
        flag = true;
        return;
      }
    });
    // 사진과 이름 후보1을 작성을 안하면 아래 코드가 실행안되게 하는 코드
    if (flag === true) {
      return;
    }
    const formData = new FormData();
    inputData.forEach((input, index) => {
      const trimmedText1 = input.text1.trim();
      const trimmedText2 = input.text2.trim();
      const trimmedText3 = input.text3.trim();
      const trimmedText4 = input.text4.trim();
      formData.append(`image-${index}`, input.image);
      formData.append(`text1-${index}`, trimmedText1);
      formData.append(`text2-${index}`, trimmedText2);
      formData.append(`text3-${index}`, trimmedText3);
      formData.append(`text4-${index}`, trimmedText4);
    });
    dispatch(addProblem(formData));
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index, e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageChange(index, { target: { files: [files[0]] } });
    }
  };
  return (
    <>
      <AppLayout>
        <div>
          <h1>이미지 및 텍스트 입력 폼</h1>
          {inputData.map((input, index) => (
            <div
              key={index}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(index, e)}
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                margin: "60px 50px",
              }}
            >
              <label
                className={styles.label}
                style={{
                  display: "inline-block",
                  padding: "10px 15px",
                  backgroundColor: "#E8E7E7",
                  color: "black",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s",
                }}
              >
                <div>이미지 업로드</div>

                <input
                  type="file"
                  onChange={(e) => handleImageChange(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  style={{
                    display: "none",
                  }}
                />

                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  {input.previewURL && (
                    <img
                      src={input.previewURL}
                      alt={`Preview ${index}`}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                      }}
                    />
                  )}
                </div>
              </label>
              <label>
                이름 후보 1
                <input
                  className={styles.input}
                  type="text"
                  value={input.text1}
                  onChange={(e) =>
                    handleTextChange(index, "text1", e.target.value)
                  }
                />
              </label>

              <label>
                이름 후보 2
                <input
                  className={styles.input}
                  type="text"
                  value={input.text2}
                  onChange={(e) =>
                    handleTextChange(index, "text2", e.target.value)
                  }
                />
              </label>
              <label>
                이름 후보 3
                <input
                  className={styles.input}
                  type="text"
                  value={input.text3}
                  onChange={(e) =>
                    handleTextChange(index, "text3", e.target.value)
                  }
                />
              </label>

              <label>
                이름 후보 4
                <input
                  className={styles.input}
                  type="text"
                  value={input.text4}
                  onChange={(e) =>
                    handleTextChange(index, "text4", e.target.value)
                  }
                />
              </label>

              <button
                onClick={() => removeInput(index)}
                className={styles.erase}
              >
                지우기
              </button>
            </div>
          ))}
          <button className={styles.button} onClick={addInput}>
            만들기
          </button>
          <button className={styles.button} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </AppLayout>
    </>
  );
};
export default createProblem;
