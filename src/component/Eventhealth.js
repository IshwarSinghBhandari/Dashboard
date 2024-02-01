import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Eventhealth = () => {
    const value = 0.80;
  return (
    <div className="ev-he d-flex">
      <div className="event">
        <div className="evhed d-flex justify-content-between border-bottom border-light-subtle">
          <h5 className="m-0 mt-auto mb-auto">Event</h5>
          <i className="bi fs-3 bi-arrow-right-circle-fill text-primary"></i>
        </div>
        <div className="evtabl pb-5">
          <table className="mt-3">
            <tr>
              <th className="w-25 pe-5">Time</th>
              <th className="w-25 pe-5">Location</th>
              <th className="w-25 pe-5">Sensor ID</th>
              <th className="w-25 pe-5">Event Type</th>
            </tr>
            <tr>
              <td>07:34:54</td>
              <td>XX</td>
              <td>P-002</td>
              <td>YY</td>
            </tr>
            <tr>
              <td>08:04:39</td>
              <td>XX</td>
              <td>P-003</td>
              <td>YY</td>
            </tr>
            <tr>
              <td>11:37:38</td>
              <td>XX</td>
              <td>P-002</td>
              <td>YY</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="health">
        <div className="evhed d-flex justify-content-between border-bottom border-light-subtle">
          <h5 className="m-0 mt-auto mb-auto">Event</h5>
          <i className="bi fs-3 bi-arrow-right-circle-fill text-primary"></i>
        </div>

        <div className="d-flex justify-content-center m-auto align-content-center mt-3 circ" style={{ width: 160, height: 160 }}>

        <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
      
        </div>

        <div className="d-flex justify-content-between align-content-center mt-3 w-100">
          <span className="material-symbols-outlined rotat">expand_circle_right</span>
          <div className="bord w-75">
            <p className="m-0">Chudiyala</p>
          </div>
          <span className="material-symbols-outlined">expand_circle_right</span>
        </div>
        
        
      </div>
    </div>
  );
};

export default Eventhealth;
