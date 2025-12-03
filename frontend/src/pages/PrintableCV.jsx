import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, profile, education, technicalSkills, functionalSkills, experience } from '../data/mockData';

const PrintableCV = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white p-8 max-w-[210mm] mx-auto print:p-0">
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
        }
      `}</style>

      {/* Header */}
      <header className="mb-8 border-b-2 border-slate-800 pb-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">{personalInfo.name}</h1>
        <h2 className="text-xl text-slate-600 mb-3">{personalInfo.title[language]}</h2>
        <div className="flex gap-6 text-sm text-slate-700">
          <span>{personalInfo.contact.email}</span>
          <span>{personalInfo.contact.phone}</span>
        </div>
      </header>

      {/* Profile */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase border-b border-slate-300">
          {language === 'en' ? 'Profile' : 'Profil'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">{profile[language]}</p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase border-b border-slate-300">
          {education.title[language]}
        </h3>
        <div className="text-sm">
          <p className="font-semibold text-slate-800">{education.degree[language]}</p>
          <p className="text-slate-600">{education.school}</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase border-b border-slate-300">
          {technicalSkills.title[language]}
        </h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {technicalSkills.categories.map((category, idx) => (
            <div key={idx}>
              <p className="font-semibold text-slate-800 mb-1">{category.name[language]}</p>
              <p className="text-slate-600">{category.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Functional Skills */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase border-b border-slate-300">
          {functionalSkills.title[language]}
        </h3>
        <ul className="text-sm text-slate-700 space-y-1">
          {functionalSkills.skills[language].map((skill, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Professional Experience */}
      <section className="mb-6 page-break">
        <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase border-b border-slate-300">
          {experience.title[language]}
        </h3>
        <div className="space-y-4">
          {experience.positions.map((position, idx) => (
            <div key={idx} className="text-sm">
              <div className="mb-1">
                <p className="font-bold text-slate-900">{position.role[language]}</p>
                <p className="font-semibold text-slate-700">{position.company}</p>
                <p className="text-slate-600 italic">{position.period}</p>
              </div>
              <ul className="space-y-1 ml-4">
                {position.highlights[language].map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start text-slate-700">
                    <span className="mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Print Instructions */}
      <div className="no-print mt-8 p-4 bg-slate-100 rounded-lg">
        <p className="text-sm text-slate-700">
          {language === 'en'
            ? 'To save as PDF: Use your browser\'s Print function (Ctrl+P / Cmd+P) and select "Save as PDF"'
            : 'Pour enregistrer en PDF : Utilisez la fonction Imprimer de votre navigateur (Ctrl+P / Cmd+P) et sélectionnez "Enregistrer au format PDF"'}
        </p>
      </div>
    </div>
  );
};

export default PrintableCV;
