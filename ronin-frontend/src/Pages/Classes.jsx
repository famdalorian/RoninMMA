import React from 'react';
import '../Pages/classes.css';

const Classes = () => {
  return (
    <div className="classes-container">
      <header className="class-section">
        <h2>Our Classes</h2>
      </header>
      <div className="class-box class-boxing class-black">
        <h3>Boxing</h3>
        <p>Train in the art of boxing with our experienced instructors.</p>
      </div>
      <div className="class-box class-thai class-black">
        <h3>Muay Thai</h3>
        <p>Learn the powerful techniques of Muay Thai from our skilled trainers.</p>
      </div>
      <div className="class-box class-mma class-black">
        <h3>Mixed Martial Arts (MMA)</h3>
        <p>Experience the ultimate fusion of various martial arts disciplines in our MMA class.</p>
      </div>
      <div className="class-box class-wrestling">
        <h3>Wrestling</h3>
        <p>Master the art of wrestling under the guidance of our seasoned coaches.</p>
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
