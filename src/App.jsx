import React from 'react';
import Navbar from './components/Header/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProjectsSection from './components/Projects/ProjectsSection.jsx';
import ExperienceSection from './components/Experience/ExperienceSection.jsx';
import TechStackSection from './components/TechStack/TechStackSection.jsx';
import EducationSection from './components/Education/EducationSection.jsx';
import ContactFooter from './components/Footer/ContactFooter.jsx';
import useScrollReveal from './hooks/useScrollReveal';
import useTesseractCanvas from './hooks/useTesseractCanvas';
import useInkTrailCanvas from './hooks/useInkTrailCanvas';
import './index.css';

function App() {
  useScrollReveal();
  useTesseractCanvas();
  useInkTrailCanvas();

  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <EducationSection />
      <ContactFooter />
    </>
  );
}

export default App;
