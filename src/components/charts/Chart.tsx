import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const datas = [2400,2210,2290,2300,2181,2500,2600,2700,2600,2300,2250,2500];

//data
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
//dddhhhhhhhhhhhh
export const data = {
  labels,
 
  datasets: [
    {
    
      fill: true,
      label: 'Sales',
      data: datas,
      borderColor: 'rgba(52, 168, 83, 0.5)',
      backgroundColor:'rgba(52, 168, 83, 0.5)',
      
      tension : 0.3 ,
      borderWidth : 1 ,
      
    },

  ],
};



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'as const,
    },
    title: {
      display: true,
      text: 'Total Expenditure',
    },
  },
};



//end data
const Chart = () => {
  return (
   
      <div className="card shadow p-4">
       {/* chart */}
       <Line options={options} data={data} />
       {/* endchart */}
      </div>

  )
}

export default Chart

//import faker from 'faker';