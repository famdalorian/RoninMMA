import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home';
import Classes from '../src/Pages/Classes';
import Timetable from '../src/Pages/TimeTable';
import Shop from '../src/Pages/Shop';
import Navbar from './components/Navbar';
import Mission from './Pages/Mission';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Timetable" element={<Timetable />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Mission" element={<Mission />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;