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
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}

export default App;