import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from './components/ui/toaster';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PrintableCV from './pages/PrintableCV';
import DownloadCode from './pages/DownloadCode';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/cv-anis-mnasri">
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/cv-print" element={<PrintableCV />} />
            <Route path="/download-code" element={<DownloadCode />} />
          </Routes>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
