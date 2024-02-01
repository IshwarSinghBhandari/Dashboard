import React from 'react';

function LeftNav() {
  return (
    <section className="leftnav">
      <div className="left-top">
        <div className="left-top-t">
          <div className="d-flex bg-dark text-white Overview headnav">
            <i className="bi bi-grid-1x2-fill"></i>
            <p>Overview</p>
          </div>
          <div className="d-flex headnav">
            <i className="bi bi-motherboard"></i>
            <p>Algorithms</p>
          </div>
          <div className="d-flex headnav">
            <span className="material-symbols-outlined"> vital_signs </span>
            <p>Sensor Health</p>
          </div>
          <div className="d-flex headnav">
            <i className="bi bi-database"></i>
            <p>Data Visualisation</p>
          </div>
          <div className="d-flex headnav">
            <i className="bi bi-gear"></i>
            <p>Settings</p>
          </div>
          <div className="d-flex headnav">
            <i className="bi bi-telephone-outbound"></i>
            <p>Contact Clients</p>
          </div>
        </div>

        <div className="d-flex headnav down">
          <i className="bi bi-download"></i>
          <p>Download Report</p>
        </div>
      </div>

      <div className="left-btm h-50">
        <div className="d-flex justify-content-between">
          <div className="d-flex w-75 headnav">
            <div className="cross d-flex"><i className="bi bi-x-lg"></i></div>
            <p className="fs">XXXXXX</p>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-person-add"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftNav;
