// LandingPage.tsx
import React from 'react';
import  Navbar  from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import Footer from './components/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />

      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
