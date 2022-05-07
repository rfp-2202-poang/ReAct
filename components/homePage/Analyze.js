import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Analyze() {
  // useEffect(() => {
  //   axios.post('/api/emotions', {text: "My fellow citizens: I stand here today humbled by the task before us, grateful for the trust you have bestowed, mindful of the sacrifices borne by our ancestors. I thank President Bush for his service to our nation, as well as the generosity and cooperation he has shown throughout this transition. Forty-four Americans have now taken the presidential oath."})
  //     .then((res) => console.log(res.data))
  // }, [])

  return (
    <div>
      Analyze page
    </div>
  )
}



// .then((analysisResults) => {
//   console.log(JSON.stringify(analysisResults, null, 2));
// })
// .catch((err) => {
//   console.log("error:", err);
// });