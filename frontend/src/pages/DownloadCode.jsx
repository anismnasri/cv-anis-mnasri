import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { Download, ArrowLeft, Code, FileCode, Package } from 'lucide-react';

const DownloadCode = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv-anis-mnasri-complete.zip';
    link.download = 'cv-anis-mnasri-complete.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Back to Home' : 'Retour à l\'Accueil'}
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {language === 'en' ? 'Download Complete Source Code' : 'Télécharger le Code Source Complet'}
          </h1>
          <p className="text-xl text-slate-600">
            {language === 'en'
              ? 'Get the full React + FastAPI CV website code'
              : 'Obtenez le code complet du site CV React + FastAPI'}
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center">
              <Code className="w-8 h-8 text-sky-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                cv-anis-mnasri-complete.zip
              </h2>
              <p className="text-slate-600">1.6 MB</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              {language === 'en' ? 'Package Contents:' : 'Contenu du Package :'}
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✓</span>
                <span>
                  {language === 'en'
                    ? 'Complete React frontend (bilingual FR/EN)'
                    : 'Frontend React complet (bilingue FR/EN)'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✓</span>
                <span>
                  {language === 'en'
                    ? 'FastAPI backend with MongoDB integration'
                    : 'Backend FastAPI avec intégration MongoDB'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✓</span>
                <span>
                  {language === 'en'
                    ? 'Contact form API with validation'
                    : 'API formulaire de contact avec validation'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✓</span>
                <span>
                  {language === 'en'
                    ? 'All shadcn/ui components included'
                    : 'Tous les composants shadcn/ui inclus'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✓</span>
                <span>
                  {language === 'en'
                    ? 'Complete deployment documentation'
                    : 'Documentation de déploiement complète'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">✓</span>
                <span>
                  {language === 'en'
                    ? 'Printable CV page (/cv-print)'
                    : 'Page CV imprimable (/cv-print)'}
                </span>
              </li>
            </ul>
          </div>

          <Button
            size="lg"
            onClick={handleDownload}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white"
          >
            <Download className="w-5 h-5 mr-2" />
            {language === 'en' ? 'Download Now (1.6 MB)' : 'Télécharger Maintenant (1.6 MB)'}
          </Button>
        </Card>

        {/* Instructions Card */}
        <Card className="p-8 bg-slate-900 text-white">
          <div className="flex items-center gap-3 mb-4">
            <FileCode className="w-6 h-6 text-sky-400" />
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Getting Started' : 'Démarrage Rapide'}
            </h3>
          </div>

          <div className="space-y-3 text-slate-300">
            <div>
              <p className="font-semibold text-white mb-1">
                {language === 'en' ? '1. Extract the ZIP file' : '1. Extraire le fichier ZIP'}
              </p>
              <code className="text-sm bg-slate-800 px-2 py-1 rounded">
                unzip cv-anis-mnasri-complete.zip
              </code>
            </div>

            <div>
              <p className="font-semibold text-white mb-1">
                {language === 'en' ? '2. Install dependencies' : '2. Installer les dépendances'}
              </p>
              <code className="text-sm bg-slate-800 px-2 py-1 rounded block mb-1">
                cd frontend && yarn install
              </code>
              <code className="text-sm bg-slate-800 px-2 py-1 rounded block">
                cd backend && pip install -r requirements.txt
              </code>
            </div>

            <div>
              <p className="font-semibold text-white mb-1">
                {language === 'en' ? '3. Read the documentation' : '3. Lire la documentation'}
              </p>
              <p className="text-sm">
                {language === 'en'
                  ? 'Check README-DEPLOYMENT.md for complete setup instructions'
                  : 'Consultez README-DEPLOYMENT.md pour les instructions complètes'}
              </p>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">
              {language === 'en' ? 'Bilingual' : 'Bilingue'}
            </h4>
            <p className="text-sm text-slate-600">
              {language === 'en' ? 'FR/EN switch' : 'Basculement FR/EN'}
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">
              {language === 'en' ? 'Responsive' : 'Responsive'}
            </h4>
            <p className="text-sm text-slate-600">
              {language === 'en' ? 'Mobile-first design' : 'Design mobile-first'}
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">
              {language === 'en' ? 'Fast & Modern' : 'Rapide & Moderne'}
            </h4>
            <p className="text-sm text-slate-600">
              {language === 'en' ? 'React + FastAPI' : 'React + FastAPI'}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DownloadCode;
