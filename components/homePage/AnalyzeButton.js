import axios from 'axios';
import React, { useState } from 'react';
import AnalyzeChart from './AnalyzeChart.js';
import {emotion, results} from './emotiondata.js';

export default function AnalyzeButton({script}) {

  const [isAnalyzed, setAnalyzed] = useState(false);
  const [fullDoc, setFullDocChart] = useState({})
  const [keywords, setCharts] = useState([]);

  const getCharts = () => {
    axios
      .post("api/emotions", {
        text: script
      })
      .then((res) => {
        // console.log(res.data);
        setFullDocChart(res.data.emotion.document.emotion);
        setCharts(res.data.keywords);
        setAnalyzed(true);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  let keywordsCharts;
  let fullDocChart;
  if (isAnalyzed) {
    keywordsCharts = keywords.map((item, i) => {
        return (
          <div key={i}>
            <h3> Keyword: {item.text} Emotion Analysis </h3>
            <AnalyzeChart emotion={item.emotion} ></AnalyzeChart>
          </div>
        )
      });

    fullDocChart = (
      <div>
        <h3>Full Document Emotion Analysis</h3>
        <AnalyzeChart emotion={fullDoc}></AnalyzeChart>
      </div>
    )
  }

  return (
    <div>
      <button onClick={getCharts}>Analyze</button>
      <div>
        {fullDocChart}
        {keywordsCharts}
      </div>
    </div>
  );
}

