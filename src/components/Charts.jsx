import React from 'react';
import Chart from 'react-apexcharts';

const Charts = ({ types }) => {
  const ChartInfo = {
    options: {
      chart: {
        id: 'cryptocurrency-charts',
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022],
      },
    },
    series: [
      {
        name: 'Total',
        data: [58, 45, 80, 75, 100],
      },
    ],
  };

  return (
    <>
      <Chart
        options={ChartInfo.options}
        series={ChartInfo.series}
        type={types}
      />
    </>
  );
};

export default Charts;
