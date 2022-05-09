import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/PreviewText.module.css';

export default function PreviewText({ script, setScript }) {

  const handleTextChange = (event) => {
    setScript(event.target.value);
  }

  return (
    <>
      {/* <div className={styles.header}>
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </div> */}
      <div className={styles.container}>
        <textarea autoFocus className={styles.text} onChange={handleTextChange}>
          {script}
        </textarea>
      </div>
    </>
  );

};
