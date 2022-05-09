import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/UploadButton.module.css';
import React, { useState } from "react";
import axios from 'axios';

const UploadButton = ({ setScript }) => {

  const hiddenFileInput = React.useRef(null);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      setScript(text);
    };

    reader.readAsText(file);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  }

  return (
    <div >
      <button className={styles.input} onClick={(event) => handleClick(event)}>
        Upload
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={(event) => handleFileUpload(event.target.files[0])}
        className={styles.input}
        style={{display: 'none'}}
      />
    </div>
  );
};

export default UploadButton;