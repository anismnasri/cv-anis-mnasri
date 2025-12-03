import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;
