import React from "react";
import "../Pages/timetable.css";

const MmaTimetable = () => {
  return (
    <div className="mma-timetable-container">
      <header className="mma-timetable-header">
        <h2>Forth Muay Thai Time Table</h2>
      </header>
      <main className="mma-timetable-main">
        <div className="timetable-cards">
          {/* Monday */}
          <div className="timetable-card">
            <h3>Monday</h3>
            <p>11 am - Muay Thai</p>
            <p>6 pm - 8 pm - Muay Thai</p>
          </div>

          {/* Tuesday */}
          <div className="timetable-card">
            <h3>Tuesday</h3>
            <p>11 am - Boxing</p>
            <p>6 pm - 7:30 pm - Muay Thai</p>
            <p>7:30 pm - 9 pm - BJJ</p>
          </div>

          {/* Wednesday */}
          <div className="timetable-card">
            <h3>Wednesday</h3>
            <p>11 am - Muay Thai</p>
            <p>6 pm - 8 pm - Muay Thai</p>{" "}
          </div>

          {/* Thursday */}
          <div className="timetable-card">
            <h3>Thursday</h3>
            <p>11 am - Boxing</p>
            <p>6 pm - 7:30 pm - Muay Thai</p>
            <p>7:30 pm - 9 pm - BJJ</p>
          </div>

          {/* Friday */}
          <div className="timetable-card">
            <h3>Friday</h3>
            <p>11 am - Muay Thai</p>
            <p>6 pm - 8 pm - Muay Thai</p>{" "}
          </div>
        </div>
      </main>
      <footer className="mma-timetable-footer">
        <p>Have a great time training!</p>
      </footer>
    </div>
  );
};

export default MmaTimetable;
