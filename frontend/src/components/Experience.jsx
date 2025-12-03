import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../context/LanguageContext';
import { experience } from '../data/mockData';
import { Briefcase } from 'lucide-react';

const TimelineItem = ({ position, index, isVisible }) => {
  const { language } = useLanguage();
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center mb-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line - Desktop */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-300 top-0"></div>

      {/* Timeline dot */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-600 rounded-full border-4 border-white shadow-lg z-10"></div>

      {/* Content */}
      <div className={`w-full lg:w-5/12 ${
        isEven ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:pr-12'
      }`}>
        <Card className="p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900">
                {position.role[language]}
              </h3>
              <p className="text-sky-600 font-semibold">{position.company}</p>
              <Badge variant="outline" className="mt-2">
                {position.period}
              </Badge>
            </div>
          </div>
          <ul className="space-y-2 mt-4">
            {position.highlights[language].map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-600">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm">{highlight}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

const Experience = () => {
  const { language } = useLanguage();
  const [visibleItems, setVisibleItems] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observerRef.current.observe(item));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          {experience.title[language]}
        </h2>
        <p className="text-center text-slate-600 mb-16">
          {language === 'en'
            ? 'A journey through 17 years of quality excellence'
            : 'Un parcours de 17 ans d\'excellence qualité'}
        </p>

        <div className="relative">
          {experience.positions.map((position, index) => (
            <div
              key={index}
              className="timeline-item"
              data-index={index}
            >
              <TimelineItem
                position={position}
                index={index}
                isVisible={visibleItems.includes(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
