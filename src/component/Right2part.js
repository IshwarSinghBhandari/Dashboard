import React from 'react';

const Right2part = () => {
  return (
    <div>
      <div className="bg-dark text-white p-3 allsame">
        <div className="evhed evhead1 d-flex justify-content-between border-bottom border-light-subtle">
          <h5 className="m-0 mt-auto mb-auto fontsmall">Missed Packets/Hour</h5>
          <i className="bi fs-4 bi-arrow-right-circle-fill text-primary"></i>
        </div>

        <div className="bar1 mt-4">
          <div className="bar2">
            <div className="bar3"></div>
          </div>
        </div>

        <div className="d-flex justify-content-around mt-3 pt-3 pb-3">
          <h3>2</h3>
          <h3>26</h3>
          <h3>7</h3>
        </div>

        <div className="d-flex justify-content-between">
          <div className="d-flex font1">
            <i className="bi bi-circle-fill color1 pe-3"></i>
            <p className="m-0">XXX</p>
          </div>
          <div className="d-flex font1">
            <i className="bi bi-circle-fill color2 pe-3"></i>
            <p className="m-0">XXX</p>
          </div>
          <div className="d-flex font1">
            <i className="bi bi-circle-fill color3 pe-3"></i>
            <p className="m-0">XXX</p>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white p-3 allsame mt-4">
        <div className="evhed evhead1 d-flex justify-content-between border-bottom border-light-subtle">
          <h5 className="m-0 mt-auto mb-auto fontsmall">Algorithm Status</h5>
          <i className="bi fs-4 bi-arrow-right-circle-fill text-primary"></i>
        </div>

        <div className="d-flex justify-content-center">
          <i className="bi bi-check-circle"></i>
        </div>

        <div className="d-flex justify-content-center">
          <div className="w-75 real-tt">
            <p className="font2 real-t m-0">Running in Real Time</p>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white p-3 allsame mt-4">
        <div className="evhed evhead1 d-flex justify-content-between border-bottom border-light-subtle">
          <h5 className="m-0 mt-auto mb-auto fontsmall">Pressure Value(psi)</h5>
          <i className="bi fs-4 bi-arrow-right-circle-fill text-primary"></i>
        </div>

        <div className="d-flex justify-content-center align-content-center mt-4 mb-4 pt-1 pb-1">
          <h1>31.56</h1>
          <span className="material-symbols-outlined line-h ps-2">
            trending_up
          </span>
        </div>

        <div className="d-flex justify-content-between align-content-center mt-3 w-100">
          <span className="material-symbols-outlined rotat rot1">
            expand_circle_right
          </span>
          <div className="bord w-75 rot2"><p className="m-0">Chudiyala</p></div>
          <span className="material-symbols-outlined rot1">
            expand_circle_right
          </span>
        </div>
      </div>
    </div>
  );
};

export default Right2part;
