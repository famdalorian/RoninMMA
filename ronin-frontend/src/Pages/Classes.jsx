import React from 'react';
import '../Pages/classes.css';

const Classes = () => {
  return (
    <div className="classes-container">
      <header className="class-section">
        <h2>Our Classes</h2>
      </header>
      <div className="class-box class-boxing class-black">
      <h3>Muay Thai</h3>        <p>Learn the powerful techniques of Muay Thai from our skilled trainers.</p>

      </div>
      <div className="class-box class-thai class-black">
      <div className="BOXING">Boxing</div>
      <p>Train in the art of boxing with our experienced instructor.</p>
      </div>
     
      <div className="class-box class-bjj">
        <h3>Brazilian Jiu-Jitsu (BJJ)</h3>
        <p>Explore the ground-based techniques of BJJ with our expert instructors.</p>
      </div>
      <div className="class-box class-gym">
        <h3>Fitness Gym</h3>
        <p>Stay fit and healthy in our well-equipped fitness gym with professional trainers.</p>
      </div>
    </div>
  );
};

export default Classes;
