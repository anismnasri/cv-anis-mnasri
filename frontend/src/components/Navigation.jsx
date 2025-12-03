import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: { en: 'About', fr: 'À Propos' } },
    { id: 'skills', label: { en: 'Skills', fr: 'Compétences' } },
    { id: 'experience', label: { en: 'Experience', fr: 'Expérience' } },
    { path: '/projects', label: { en: 'Projects', fr: 'Projets' } },
    { id: 'contact', label: { en: 'Contact', fr: 'Contact' } }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            AM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.path ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-sky-600 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label[language]}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors hover:text-sky-600 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label[language]}
                </button>
              )
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`flex items-center gap-2 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              link.path ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-slate-700 font-medium hover:text-sky-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label[language]}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-slate-700 font-medium hover:text-sky-600"
                >
                  {link.label[language]}
                </button>
              )
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'Français' : 'English'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
