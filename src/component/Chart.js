import React, { useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const chartRef = useRef(null);

  const generateRandomData = () => {
    const limit = 500;
    let y = 100;
    const data = [];
    const dataSeries = { type: "line" };
    const dataPoints = [];

    for (let i = 0; i < limit; i += 1) {
      y += Math.round(Math.random() * 10 - 5);
      dataPoints.push({
        x: i,
        y: y
      });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);

    return data;
  };



  const options = {
    zoomEnabled: true,
    animationEnabled: true,
    title: {
      text: "Select the area to zoom"
    },
    data: generateRandomData() 
  };


  return (
    <div class="bg-white chartt  ">

    <div 
    class="evhed d-flex justify-content-between border-bottom border-light-subtle ms-3 me-3">
    <h5 class="m-0 mt-auto mb-auto">XXXX</h5>

    <h5 class="m-0 mt-auto mb-auto">31.56 PSI</h5>
    
    <i class="bi fs-3 bi-arrow-right-circle-fill text-primary"></i>
  </div >
   <div class="d-flex justify-content-center">
      <CanvasJSChart options={options}
        onRef={ref => chartRef.current = ref}
      />
    </div>
    </div>
  );
};

export default Chart;
