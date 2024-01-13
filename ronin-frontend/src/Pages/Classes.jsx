// Classes.jsx
import React from 'react';
import './classes.css';

function Classes() {
  return (
    <div className="classes-container">
      <h1>Classes Information</h1>
      <section className="class-section">
        <h2>Boxing</h2>
        <p>
          Our boxing classes focus on developing fundamental boxing techniques, footwork, and
          conditioning. Suitable for all levels, from beginners to advanced.
        </p>
      </section>

      <section className="class-section">
        <h2>MMA (Mixed Martial Arts)</h2>
        <p>
          Join our MMA classes to learn a combination of striking, wrestling, and grappling
          techniques. Open to all skill levels, our instructors provide personalized training for
          everyone.
        </p>
      </section>

      <section className="class-section">
        <h2>Muay Thai</h2>
        <p>
          Experience the art of Muay Thai with our dedicated classes. Learn traditional Muay Thai
          techniques, including powerful strikes and clinch work. Suitable for all levels of
          experience.
        </p>
      </section>

      <section className="class-section">
        <h2>Wrestling</h2>
        <p>
          Our wrestling classes cover takedowns, ground control, and defensive strategies. Whether
          you're a beginner or an experienced wrestler, our classes cater to all levels.
        </p>
      </section>

      <section className="class-section">
        <h2>BJJ (Brazilian Jiu-Jitsu)</h2>
        <p>
          Join our BJJ classes to explore ground fighting, submissions, and positional control. Our
          instructors ensure a welcoming environment for practitioners of all levels.
        </p>
      </section>

      <section className="class-section">
        <h2>Strength and Conditioning</h2>
        <p>
          Improve your overall fitness with our strength and conditioning classes. Tailored for all
          fitness levels, these classes focus on building strength, endurance, and flexibility.
        </p>
      </section>
    </div>
  );
}

export default Classes;
