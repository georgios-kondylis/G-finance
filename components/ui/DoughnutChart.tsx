"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label:"\u00A0Money",// Unicode for &nbsp; to make space
        data: [12750, 1500, 3740, 8000],
        backgroundColor: ["#ff9817", "#2265d8", "#2f91fa", "#0747b6"],
      },
    ],
    labels: ["Swedbank", "Ethniki", "Avanza", "Coibase"],
  };

  return <Doughnut 
  data={data} 
  options={{ 
    cutout: "60%",
    plugins: {legend: {display:false}}
  }} />;
};

export default DoughnutChart;
