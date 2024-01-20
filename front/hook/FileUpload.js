import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ onFileUpload }) => {
  const [isDragging, setDragging] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setDragging(false);
      onFileUpload(acceptedFiles);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDragEnter: () => setDragging(true),
    onDragLeave: () => setDragging(false),
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderWidth: "2px",
        borderRadius: "4px",
        borderColor: isDragging ? "#52c41a" : "#d9d9d9",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        color: "#434343",
        outline: "none",
        transition: "border 0.24s ease-in-out",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      <p style={{ margin: "10px" }}>
        {isDragging
          ? "Drop the files here!"
          : "Drag & Drop files here, or click to select files"}
      </p>
    </div>
  );
};

export default FileUpload;
