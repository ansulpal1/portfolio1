import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './section/Header.jsx'
import Hero from './section/Hero.jsx'
import ExperienceSection from './section/ExperienceSection.jsx'
import TechArsenal from './section/TechArsenal.jsx'
import ProjectsSection from './section/ProjectsSection.jsx'
import CertificationsSection from './section/CertificationsSection.jsx'
import ActivitySection from './section/ActivitySection.jsx'
import ContactSection from './section/ContactSection.jsx'
import Footer from './section/Footer.jsx'
import AllCertificationsPage from './pages/AllCertificationsPage.jsx'
import AllProjectsPage from './pages/AllProjectsPage.jsx'

const HomePage = () => (
  <>
    <Hero />
    <ExperienceSection />
    <TechArsenal />
    <ProjectsSection />
    <CertificationsSection />
    <ActivitySection />
    <ContactSection />
  </>
)

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certifications" element={<AllCertificationsPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App