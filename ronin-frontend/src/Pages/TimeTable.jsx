import React from 'react';

const MmaTimetable = () => {
  return (
    <div className="mma-timetable-container">
      <header className="mma-timetable-header">
        <h2>Ronin MMA Liverpool Timetable</h2>
      </header>
      <main className="mma-timetable-main">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2">Monday</td>
              <td>11 am</td>
              <td>BJJ</td>
            </tr>
            <tr>
              <td>6 pm - 8 pm</td>
              <td>MMA</td>
            </tr>
            <tr>
              <td rowSpan="2">Tuesday</td>
              <td>11 am</td>
              <td>Boxing</td>
            </tr>
            <tr>
              <td>6 pm - 8 pm</td>
              <td>MMA</td>
            </tr>
            <tr>
              <td rowSpan="2">Wednesday</td>
              <td>11 am</td>
              <td>Wrestling</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan="2">Thursday</td>
              <td>11 am</td>
              <td>Muay Thai</td>
            </tr>
            <tr>
              <td>6 pm - 8 pm</td>
              <td>MMA</td>
            </tr>
            <tr>
              <td rowSpan="2">Friday</td>
              <td>11 am</td>
              <td>MMA Striking</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </main>
      <footer className="mma-timetable-footer">
        <p>Have a great time training!</p>
      </footer>
    </div>
  );
};

export default MmaTimetable;
