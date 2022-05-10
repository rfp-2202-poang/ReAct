import axios from 'axios';
import React, { useState } from 'react';
import AnalyzeChart from './AnalyzeChart.js';
import {emotion, results} from './emotiondata.js';
import Link from 'next/link';
import styles from '../../styles/Edit.module.css'

export default function AnalyzeButton({ script, setAnalysis , setAnalysisArr}) {

  const getCharts = () => {
    axios
      .post("api/emotions", {
        text: script
      })
      .then((res) => {

        setAnalysis(res.data.emotion.document.emotion);
        setAnalysisArr(res.data.keywords);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <Link href='/analysis'>
      <button onClick={getCharts} className={styles.button}>Analyze</button>
      </Link>
    </>
  );
}

