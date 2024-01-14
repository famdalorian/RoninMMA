// Home.jsx
import React from 'react';
import '../Pages/Home.css'
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1> Ronin MMA Liverpool</h1>
        <p>Your Ultimate Destination for Mixed Martial Arts Training</p>
      </header>
      <main className="main-content">
       <HeroSection />

        <section className="features-section">
          <h2>Why Choose Ronin MMA?</h2>
          <div className="feature">
            <h3>Expert Instructors</h3>
            <p>Train with experienced and dedicated instructors in each discipline.</p>
          </div>

          <div className="feature">
            <h3>State-of-the-Art Facilities</h3>
            <p>Our gym is equipped with top-notch facilities to enhance your training experience.</p>
          </div>

          <div className="feature">
            <h3>Flexible Schedule</h3>
            <p>Choose from a variety of classes at convenient times to fit your schedule.</p>
          </div>

          <div className="feature">
            <h3>All Skill Levels Welcome</h3>
            <p>Whether you're a beginner or an advanced practitioner, our classes cater to all levels.</p>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="lead-capture-section">
          <h2>Join Us Today!</h2>
          <p>Fill out the form below to get started on your MMA journey.</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <button type="submit">Get Started</button>
          </form>
        </section>
      </main>
      <HeroSection2 />


      <footer className="footer">
        <p>Copyright &copy; 2024 Ronin MMA Liverpool. cc0.</p>
      </footer>
    </div>
  );
}

export default Home;
