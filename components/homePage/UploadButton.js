import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/UploadButton.module.css';
import buttonStyles from '../../styles/Button.module.css';
import React, { useState } from "react";
import axios from 'axios';

const UploadButton = ({ setScript, setUploadComplete }) => {

  const hiddenFileInput = React.useRef(null);

  const handleFileUpload = (file) => {
    // console.log('file:::', file);


    if (file !== undefined && file.type !== 'text/plain') {
      alert('Invalid file type');
      return
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      // console.log('uploaded text:::', text);
      setScript(text);
      setUploadComplete(true);
    };

    reader.readAsText(file);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
    setUploadComplete(false);
  }

  return (
    <>
      <button className={buttonStyles.button} onClick={(event) => handleClick(event)}>
        Choose File
      </button>
      <input
        type="file"
        ref={hiddenFileInput} accept=".txt"
        onChange={(event) => handleFileUpload(event.target.files[0])}
        className={buttonStyles.button}
        style={{display: 'none'}}
      />
      <p className={styles.format}>Supported formats: .txt</p>
    </>

  );
};

export default UploadButton;