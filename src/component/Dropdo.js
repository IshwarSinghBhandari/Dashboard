import React from 'react';

const Dropdo = () => {
  return (
    <div className="d-flex">
      <div className="dropdown">
        <button className="dropbtn fw-bold">
          Select Location
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        <div className="dropdown-content">
          <a href="#placeholder1">Link 1</a>
          <a href="#placeholder2">Link 2</a>
          <a href="#placeholder3">Link 3</a>
        </div>
      </div>
      <div className="icos">
        <i className="bi bi-plus-lg"></i>
        <i className="bi bi-box-arrow-up"></i>
        <i className="bi bi-sliders2-vertical"></i>
        <i className="bi bi-download"></i>
      </div>
    </div>
  );
};

export default Dropdo;
