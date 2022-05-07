import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

// import { Bar } from 'react-chartjs-2';


export default function Analyze() {
  // useEffect(() => {
  //   axios.post('/api/emotions', {text: "My fellow citizens: I stand here today humbled by the task before us, grateful for the trust you have bestowed, mindful of the sacrifices borne by our ancestors. I thank President Bush for his service to our nation, as well as the generosity and cooperation he has shown throughout this transition. Forty-four Americans have now taken the presidential oath."})
  //     .then((res) => console.log(res.data))
  // }, [])
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const [_document, set_document] = useState(null)
  const [ctx, setctx] = useState('')

  // const [randomChart, setRandomChart]

  useEffect(() => {

    set_document(document)
    console.log(document)
    setctx(document.getElementById('myChart'))
    console.log(ctx)

    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    if(typeof chartInstance !== 'undefined') chartInstance.destroy();

    }

  }, [])




  return (
    <div >
      Emotions Chart
     <canvas id="myChart" width="400" height="400"></canvas>

      {/* <Bar
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }}

      height={400}

      width={600}

      // options = {{}}
      /> */}
      <script>
      {}
      </script>
    </div>
  )
}



// .then((analysisResults) => {
//   console.log(JSON.stringify(analysisResults, null, 2));
// })
// .catch((err) => {
//   console.log("error:", err);
// });