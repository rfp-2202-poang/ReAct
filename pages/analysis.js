import styles from "../styles/Analysis.module.css";
import buttonStyles from '../styles/Button.module.css';
import AnalyzeChart from '../components/homePage/AnalyzeChart.js'
import Header from '../components/homePage/Header.js';
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Analysis({ script, analysis, analysisArr }) {
  const generate = useRef(null);

  useEffect(() => {
    generate.current = require('../helpers/download.js');
  }, []);

  let display;
  if (script.length > 0) {
    display =
      (<>
      <div className={styles.body}>
        <Link href='/edit'>
          <BsArrowLeft className={styles.back} />
        </Link>
        <div className={styles.rowcontainer}>
          {display}
          <textarea
            className={styles.script}
            value={script}
            disabled>
          </textarea>

          <div className={styles.chartBox}>

            <span className={styles.emotionTitle}>Full Document - Emotion Analysis</span>
            <AnalyzeChart emotion={analysis} />

          </div>
        </div>
        <div className={styles.nav}>
          <Link href='/practice'>
            <button className={buttonStyles.button}>Practice</button>
          </Link>
          <button className={buttonStyles.button} onClick={() => { generate.current.default(script) }}>Download</button>
        </div>
        </div>
      </>)
  } else {
    display =
    <div className={styles.warningContainer}>
        <Link href='/edit'>
          <BsArrowLeft className={styles.back} />
        </Link>
        <div className={styles.uploadWarning}>Please upload or record your script </div>
    </div>
  }

  return (
    <div className={styles.container}>
      <Header />
        {display}
    </div>
  )
}