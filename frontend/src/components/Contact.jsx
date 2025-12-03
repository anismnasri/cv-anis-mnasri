import React, { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/mockData';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if backend is available (for self-hosted deployments)
      if (BACKEND_URL && BACKEND_URL !== 'undefined' && BACKEND_URL !== '') {
        const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
        
        if (response.data.success) {
          toast({
            title: language === 'en' ? 'Message Sent!' : 'Message Envoyé !',
            description:
              language === 'en'
                ? 'Thank you for your message. I will get back to you soon.'
                : 'Merci pour votre message. Je vous recontacterai bientôt.',
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        }
      } else {
        // For GitHub Pages or static hosting without backend
        // Use mailto as fallback
        const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})

${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        
        toast({
          title: language === 'en' ? 'Opening Email Client' : 'Ouverture du Client Email',
          description:
            language === 'en'
              ? 'Your email client will open with the message pre-filled.'
              : 'Votre client email s\'ouvrira avec le message pré-rempli.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // Fallback to mailto
      const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})

${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      toast({
        title: language === 'en' ? 'Opening Email Client' : 'Ouverture du Client Email',
        description:
          language === 'en'
            ? 'Failed to send message. Please try again.'
            : 'Échec de l\'envoi du message. Veuillez réessayer.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          {language === 'en' ? 'Get in Touch' : 'Me Contacter'}
        </h2>
        <p className="text-center text-slate-600 mb-12">
          {language === 'en'
            ? 'Feel free to reach out for collaborations or just a friendly chat'
            : 'N\'hésitez pas à me contacter pour des collaborations ou simplement discuter'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="p-8 bg-slate-900 text-white h-full">
              <h3 className="text-2xl font-semibold mb-6">
                {language === 'en' ? 'Contact Information' : 'Informations de Contact'}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">
                      {language === 'en' ? 'Email' : 'Email'}
                    </p>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-white hover:text-sky-400 transition-colors"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">
                      {language === 'en' ? 'Phone' : 'Téléphone'}
                    </p>
                    <a
                      href={`tel:${personalInfo.contact.phone}`}
                      className="text-white hover:text-sky-400 transition-colors"
                    >
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-4">
                    {language === 'en' ? 'Connect with me' : 'Me suivre'}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {language === 'en' ? 'Your Name' : 'Votre Nom'}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'en' ? 'John Doe' : 'Jean Dupont'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {language === 'en' ? 'Email Address' : 'Adresse Email'}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {language === 'en' ? 'Subject' : 'Sujet'}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={
                      language === 'en'
                        ? 'Project collaboration'
                        : 'Collaboration sur un projet'
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {language === 'en' ? 'Message' : 'Message'}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={
                      language === 'en'
                        ? 'Tell me about your project or inquiry...'
                        : 'Parlez-moi de votre projet ou demande...'
                    }
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                >
                  {isSubmitting ? (
                    language === 'en' ? 'Sending...' : 'Envoi en cours...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {language === 'en' ? 'Send Message' : 'Envoyer le Message'}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
