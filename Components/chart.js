import React from 'react';
import { Line } from 'react-chartjs-2';
export default function Home (
  {
    title,
    datas
  })
{
  const data = {
    labels: ['23', '24', '25', '26', '27', '28', '29'],
    datasets: [
      {
        label: title,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: datas,
      }
    ]
  };
  return (
    <div>
      <h2>Line Example</h2>
      <Line
        data={data}
        width={400}
        height={400}
      />
    </div>
  )
}
