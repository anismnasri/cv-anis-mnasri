# Contrat d'Intégration Frontend-Backend - CV Anis MNASRI

## Vue d'ensemble
Ce document décrit les contrats API et l'intégration entre le frontend et le backend pour le site CV d'Anis MNASRI.

## Données Mockées (Frontend)
Toutes les données sont actuellement dans `/app/frontend/src/data/mockData.js` :
- Informations personnelles
- Profil et formation
- Compétences techniques et fonctionnelles
- Expérience professionnelle
- Projets

## APIs Backend à Implémenter

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "uuid"
}
```

**Validation:**
- Tous les champs sont requis
- Email doit être valide
- Message minimum 10 caractères

**Stockage MongoDB:**
Collection: `contact_messages`
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "subject": "string", 
  "message": "string",
  "created_at": "datetime",
  "status": "new" // new, read, replied
}
```

### 2. CV Download Tracking (Optional)
**Endpoint:** `POST /api/cv-download`

**Request Body:**
```json
{
  "visitor_id": "string",
  "language": "en|fr"
}
```

**Response:**
```json
{
  "success": true,
  "download_count": 123
}
```

### 3. Page Analytics (Optional)
**Endpoint:** `POST /api/analytics`

**Request Body:**
```json
{
  "page": "string",
  "language": "en|fr",
  "timestamp": "datetime"
}
```

## Intégration Frontend

### Fichier à Modifier: `/app/frontend/src/components/Contact.jsx`

**Changement:**
```javascript
// AVANT (Mock)
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setTimeout(() => {
    toast({ title: 'Message Sent!', ... });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  }, 1500);
};

// APRÈS (API Integration)
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
    
    if (response.data.success) {
      toast({
        title: language === 'en' ? 'Message Sent!' : 'Message Envoyé !',
        description: language === 'en' 
          ? 'Thank you for your message. I will get back to you soon.'
          : 'Merci pour votre message. Je vous recontacterai bientôt.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    toast({
      title: language === 'en' ? 'Error' : 'Erreur',
      description: language === 'en'
        ? 'Failed to send message. Please try again.'
        : 'Échec de l\'envoi du message. Veuillez réessayer.',
      variant: 'destructive'
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

## Configuration Backend

### Variables d'environnement
Dans `/app/backend/.env` :
- `MONGO_URL` : Déjà configuré
- `DB_NAME` : Déjà configuré

### Modèles MongoDB
Créer dans `/app/backend/models/contact.py` :
- ContactMessage model avec validation Pydantic

### Routes API
Créer dans `/app/backend/routes/contact.py` :
- POST endpoint pour soumission de formulaire
- GET endpoint pour admin (liste des messages)

## Tests d'Intégration

### Tests Backend
```bash
curl -X POST http://localhost:8001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### Tests Frontend
1. Remplir le formulaire de contact
2. Vérifier la soumission réussie
3. Vérifier le toast de confirmation
4. Vérifier que le formulaire est réinitialisé
5. Vérifier la gestion d'erreur

## Notes d'Implémentation
- Le frontend continuera de fonctionner avec mock data pour toutes les sections sauf le formulaire de contact
- Pas besoin de backend pour les données statiques (profil, compétences, expérience) car elles ne changent pas fréquemment
- Le formulaire de contact est la seule partie nécessitant une vraie intégration backend
- Les données mockées peuvent être déplacées vers le backend plus tard si nécessaire
