import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/mockData';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-slate-400">
              {language === 'en'
                ? 'QA & Test Automation Expert'
                : 'Expert QA & Automatisation de Tests'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  {language === 'en' ? 'About' : 'À Propos'}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-sky-400 transition-colors">
                  {language === 'en' ? 'Skills' : 'Compétences'}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-sky-400 transition-colors">
                  {language === 'en' ? 'Experience' : 'Expérience'}
                </a>
              </li>
              <li>
                <a href="/projects" className="text-slate-400 hover:text-sky-400 transition-colors">
                  {language === 'en' ? 'Projects' : 'Projets'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Connect' : 'Me Suivre'}
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="w-10 h-10 bg-slate-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>
            © {currentYear} {personalInfo.name}.{' '}
            {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
