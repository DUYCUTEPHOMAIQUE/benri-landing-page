import React from 'react';
import BlurWrapper from './components/BlurWrapper';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import AppLinks from './components/AppLinks';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <BlurWrapper>
      <div className="font-sans bg-benri-green-100">
        <Header />
        <main>
          <Hero />
          <Features />
          <CallToAction />
          <AppLinks />
          <Testimonials />
          <Team />
          <Achievements />
          <FAQ />
        </main>
        <Footer />
      </div>
    </BlurWrapper>
  );
}

export default App;