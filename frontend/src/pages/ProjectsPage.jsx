import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/mockData';
import { ArrowLeft, FileText, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Back to Home' : 'Retour à l\'Accueil'}
          </Button>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            {projects.title[language]}
          </h1>
          <p className="text-xl text-slate-600">
            {language === 'en'
              ? 'Key projects and technical achievements throughout my career'
              : 'Projets clés et réalisations techniques tout au long de ma carrière'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.items.map((project, idx) => (
            <Card
              key={idx}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title[language]}
                </h3>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-sky-600" />
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <Badge
                    key={techIdx}
                    variant="secondary"
                    className="bg-slate-200 text-slate-800"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Documentation Section */}
        <Card className="p-8 bg-slate-900 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-sky-600 rounded-lg flex items-center justify-center">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                {language === 'en'
                  ? 'Technical Documentation & Proposals'
                  : 'Documentation Technique & Propositions'}
              </h2>
              <p className="text-slate-400 mt-2">
                {language === 'en'
                  ? 'Explore detailed technical documentation, implementation guides, and practical proposals'
                  : 'Découvrez la documentation technique détaillée, les guides d\'implémentation et les propositions pratiques'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'GitHub Repositories' : 'Dépôts GitHub'}
              </h3>
              <p className="text-slate-400 mb-4">
                {language === 'en'
                  ? 'Access code samples, automation frameworks, and open-source contributions'
                  : 'Accédez aux exemples de code, frameworks d\'automatisation et contributions open-source'}
              </p>
              <Button
                variant="outline"
                className="border-sky-600 text-sky-400 hover:bg-sky-600 hover:text-white"
                onClick={() => window.open('https://github.com/anismnasri', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                {language === 'en' ? 'View GitHub' : 'Voir GitHub'}
              </Button>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Documentation Hub' : 'Hub Documentation'}
              </h3>
              <p className="text-slate-400 mb-4">
                {language === 'en'
                  ? 'Comprehensive guides on test strategies, automation best practices, and QA methodologies'
                  : 'Guides complets sur les stratégies de test, bonnes pratiques d\'automatisation et méthodologies QA'}
              </p>
              <Button
                variant="outline"
                className="border-sky-600 text-sky-400 hover:bg-sky-600 hover:text-white"
              >
                <FileText className="w-4 h-4 mr-2" />
                {language === 'en' ? 'View Docs' : 'Voir la Doc'}
              </Button>
            </div>
          </div>

          {/* Practical Proposals Section */}
          <div className="mt-8 pt-8 border-t border-slate-700">
            <h3 className="text-2xl font-bold mb-6">
              {language === 'en' ? 'Practical Proposals' : 'Propositions Pratiques'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'QA Infrastructure Setup' : 'Infrastructure QA'}
                </h4>
                <p className="text-slate-400 text-sm">
                  {language === 'en'
                    ? 'End-to-end setup of test automation infrastructure with CI/CD integration'
                    : 'Configuration complète de l\'infrastructure d\'automatisation des tests avec intégration CI/CD'}
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'Test Strategy Consulting' : 'Conseil Stratégie Test'}
                </h4>
                <p className="text-slate-400 text-sm">
                  {language === 'en'
                    ? 'Strategic planning and risk analysis for quality assurance initiatives'
                    : 'Planification stratégique et analyse des risques pour les initiatives qualité'}
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'Team Training & Mentoring' : 'Formation & Mentorat'}
                </h4>
                <p className="text-slate-400 text-sm">
                  {language === 'en'
                    ? 'Technical training programs and best practices workshops for QA teams'
                    : 'Programmes de formation technique et ateliers de bonnes pratiques pour équipes QA'}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsPage;
