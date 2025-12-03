import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/mockData';
import { Mail, Phone, Github, Linkedin, FileDown } from 'lucide-react';

const Hero = () => {
  const { language } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    const cvFileName = language === 'fr' ? 'CV_Anis_MNASRI_FR.pdf' : 'CV_Anis_MNASRI_EN.pdf';
    const cvPath = `/cv/${cvFileName}`;
    
    try {
      // Check if PDF file exists
      const response = await fetch(cvPath, { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, proceed with download
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = cvFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // PDF doesn't exist, open printable version in new tab
        window.open('/cv-print', '_blank');
      }
    } catch (error) {
      // Fallback - open printable version
      window.open('/cv-print', '_blank');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-2xl sm:text-3xl text-sky-400 mb-6">
              {personalInfo.title[language]}
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {language === 'en'
                ? '18 years of expertise in QA & Test Automation'
                : '18 ans d\'expertise en QA & Automatisation de Tests'}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">{personalInfo.contact.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">{personalInfo.contact.phone}</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-sky-600 hover:bg-sky-700 text-white"
              >
                {language === 'en' ? 'Get in Touch' : 'Me Contacter'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                onClick={handleDownloadCV}
              >
                <FileDown className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Download CV' : 'Télécharger CV'}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-700 hover:bg-sky-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-700 hover:bg-sky-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-sky-500 to-slate-700 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-white">
                  <img
                    src={`${process.env.PUBLIC_URL}/profile-anis-mnasri.jpg`}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-400 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
