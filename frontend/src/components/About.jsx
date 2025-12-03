import React from 'react';
import { Card } from './ui/card';
import { useLanguage } from '../context/LanguageContext';
import { profile, education } from '../data/mockData';
import { GraduationCap } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          {language === 'en' ? 'About Me' : 'À Propos'}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile */}
          <div className="lg:col-span-2">
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                {language === 'en' ? 'Profile' : 'Profil'}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {profile[language]}
              </p>
            </Card>
          </div>

          {/* Education */}
          <div>
            <Card className="p-8 h-full bg-slate-900 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">
                  {education.title[language]}
                </h3>
              </div>
              <p className="text-sky-400 font-medium mb-2">
                {education.degree[language]}
              </p>
              <p className="text-slate-300 text-sm">
                {education.school}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
