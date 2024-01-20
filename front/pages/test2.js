import React, { useState, useRef } from "react";

const DynamicInputsForm = () => {
  const [inputData, setInputData] = useState([
    { image: null, text1: "", text2: "", text3: "", text4: "", previewURL: "" },
  ]);

  const inputRefs = useRef([]);

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
  };

  return (
    <div>
      <h1>이미지 및 텍스트 입력 폼</h1>
      {inputData.map((input, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            margin: 30,
          }}
        >
          <label>
            이미지 업로드
            <input
              type="file"
              onChange={(e) => handleImageChange(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
            <div>
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
              onChange={(e) => handleTextChange(index, "text1", e.target.value)}
            />
          </label>

          <label>
            이름 후보 2
            <input
              className={styles.input}
              type="text"
              value={input.text2}
              onChange={(e) => handleTextChange(index, "text2", e.target.value)}
            />
          </label>
          <label>
            이름 후보 3
            <input
              className={styles.input}
              type="text"
              value={input.text3}
              onChange={(e) => handleTextChange(index, "text3", e.target.value)}
            />
          </label>

          <label>
            이름 후보 4
            <input
              className={styles.input}
              type="text"
              value={input.text4}
              onChange={(e) => handleTextChange(index, "text4", e.target.value)}
            />
          </label>

          <button onClick={() => removeInput(index)}>Remove Input</button>
        </div>
      ))}
      <button onClick={addInput}>Add Input</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DynamicInputsForm;
