import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/UploadButton.module.css';
import React, { useState } from "react";
import axios from 'axios';

const UploadButton = ({ setScript, setUploadComplete }) => {

  const hiddenFileInput = React.useRef(null);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      console.log('uploaded text:::', text);
      setScript(text);
      setUploadComplete(true);
    };

    reader.readAsText(file);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  }

  return (
    <>
      <button className={styles.button} onClick={(event) => handleClick(event)}>
        Choose File
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={(event) => handleFileUpload(event.target.files[0])}
        className={styles.button}
        style={{display: 'none'}}
      />
      <p className={styles.format}>Supported formats: .txt</p>
    </>

  );
};

export default UploadButton;