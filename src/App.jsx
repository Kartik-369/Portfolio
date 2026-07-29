import React from 'react';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import ExperienceSection from './components/Experience/ExperienceSection';
import TechStackSection from './components/TechStack/TechStackSection';
import EducationSection from './components/Education/EducationSection';
import ContactFooter from './components/Footer/ContactFooter';
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
