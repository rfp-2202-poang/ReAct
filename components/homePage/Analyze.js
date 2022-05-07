// import React, { useRef, useState, useEffect} from 'react';
import axios from 'axios';
import React, {useState} from 'react';

import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

const data = [
  {
    name: "sadness",

    emotions: 4.1851,
    amt: 100
  },
  {
    name: "joy",

    emotions: 71.761,
    amt: 100
  },
  {
    name: "fear",

    emotions: 3.713,
    amt: 100
  },
  {
    name: "disgust",

    emotions: 10.0171,
    amt: 100
  },
  {
    name: "anger",

    emotions: 4.2882,
    amt: 100
  },
];

let emotion = {
  sadness: 0.041851,
  joy: 0.71761,
  fear: 0.03713,
  disgust: 0.100171,
  anger: 0.042882
}

const Analyze = (emotion) => {



  // useEffect(() => {
  //   console.log(emotion)
  // }, [])


  return (
    <div>
      Full Documents Graph
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

export default Analyze
