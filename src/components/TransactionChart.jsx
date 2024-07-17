// ./src/components/TransactionChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const TransactionChart = ({ transactions }) => {
  const data = {
    labels: transactions.map(txn => txn.date),
    datasets: [
      {
        label: 'Total Transaction Amount',
        data: transactions.map(txn => txn.amount),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TransactionChart;
