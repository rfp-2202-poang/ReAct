// import React, { useRef, useState, useEffect} from 'react';
import axios from 'axios';
import React, {useState} from 'react';

import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";



const AnalyzeChart = ({emotion}) => {

  const data = [
    {
      name: "sadness",
      emotions: (emotion.sadness * 100).toFixed(2),
      amt: 100
    },
    {
      name: "joy",
      emotions: (emotion.joy * 100).toFixed(2),
      amt: 100
    },
    {
      name: "fear",
      emotions: (emotion.fear * 100).toFixed(2),
      amt: 100
    },
    {
      name: "disgust",
      emotions: (emotion.disgust * 100).toFixed(2),
      amt: 100
    },
    {
      name: "anger",
      emotions: (emotion.anger * 100).toFixed(2),
      amt: 100
    },
  ];

  return (
      <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 0,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0, 100]}/>
      <Tooltip />
      <Legend />
      <Bar dataKey="emotions" fill="#c5af75" />
    </BarChart>
  )
}

export default AnalyzeChart;
