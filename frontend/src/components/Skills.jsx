import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../context/LanguageContext';
import { technicalSkills, functionalSkills } from '../data/mockData';

const Skills = () => {
  const { language } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          {language === 'en' ? 'Skills & Expertise' : 'Compétences & Expertise'}
        </h2>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            {technicalSkills.title[language]}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.categories.map((category, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  {category.name[language]}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="bg-sky-100 text-sky-800 hover:bg-sky-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Functional Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            {functionalSkills.title[language]}
          </h3>
          <Card className="p-8 bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {functionalSkills.skills[language].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                >
                  <div className="w-2 h-2 bg-sky-600 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
