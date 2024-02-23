// Home.jsx
import React from 'react';
import '../Pages/Home.css'
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';

function Home() {
  return (
    <div className="home-container">
      <header className="header">        

        <h1> Forth</h1>
          
          <h2> Muay Thai</h2>
        <p>Your Ultimate Destination for Elite Muay Thai Training</p>
        <div className="logo"></div>
        <p>From Beginer To Professional </p>
      </header>
      <main className="main-content">
       <HeroSection />

        <section className="features-section">
          <h2>Why Choose Forth Muay Thai?</h2>
          <div className="feature">
            <h3>Expert Instructors</h3>
            <p>Train with A experienced and dedicated instructor.</p>
          </div>

         

          <div className="feature">
            <h3>Flexible Schedule</h3>
            <p>Choose from a variety of classes at convenient times to fit your schedule.</p>
          </div>

          <div className="feature">
            <h3>ALL Skill Levels Welcome</h3>
            <p>Whether you're a beginner or an advanced practitioner, our classes cater to all levels.</p>
          </div>
        </section>

        <section className="lead-capture-section">
          <h2>Join Us Today!</h2>
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
        <p>Copyright &copy; 2024 Forth Muay Thai Liverpool. cc0.</p>
      </footer>
    </div>
  );
}

export default Home;
