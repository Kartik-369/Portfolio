import React from 'react';
import Navbar from './Components/Header/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import ProjectsSection from './Components/Projects/ProjectsSection.jsx';
import ExperienceSection from './Components/Experience/ExperienceSection.jsx';
import TechStackSection from './Components/TechStack/TechStackSection.jsx';
import EducationSection from './Components/Education/EducationSection.jsx';
import ContactFooter from './Components/Footer/ContactFooter.jsx';
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
