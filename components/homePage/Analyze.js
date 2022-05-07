// import React, { useRef, useState, useEffect} from 'react';
import axios from 'axios';
import React, {useState} from 'react';

import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";


const Analyze = ({emotion}) => {

  const data = [
    {
      name: "sadness",
      emotions: emotion.sadness * 100,
      amt: 100
    },
    {
      name: "joy",
      emotions: emotion.joy * 100,
      amt: 100
    },
    {
      name: "fear",
      emotions: emotion.fear * 100,
      amt: 100
    },
    {
      name: "disgust",
      emotions: emotion.disgust * 100,
      amt: 100
    },
    {
      name: "anger",
      emotions: emotion.anger * 100,
      amt: 100
    },
  ];

  // console.log(data)

  return (
    <div>
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="emotions" fill="#c5af75" />
    </BarChart>

    </div>
  )
}

export default Analyze;
