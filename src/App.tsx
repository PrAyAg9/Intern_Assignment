// App.tsx (Main Application)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';  
import Navbar from './components/Navbar'; 
import StudentsPage from './components/StudentsPage';
import LoginPage from './components/LoginPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
