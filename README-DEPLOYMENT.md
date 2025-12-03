# CV Web Anis MNASRI - Guide de Déploiement Complet

## 📦 Contenu du Package

Ce package contient votre site CV professionnel complet :
- **Frontend React** : Interface utilisateur bilingue (FR/EN)
- **Backend FastAPI** : API pour le formulaire de contact
- **Base de données** : MongoDB pour stocker les messages de contact
- **Documentation** : Fichiers de configuration et instructions

---

## 🚀 Installation et Démarrage

### Prérequis

- **Node.js** 16+ et **Yarn**
- **Python** 3.9+
- **MongoDB** (local ou cloud comme MongoDB Atlas)

### Étape 1 : Extraire le fichier .zip

```bash
unzip cv-anis-mnasri-complete.zip -d mon-cv-website
cd mon-cv-website
```

### Étape 2 : Configuration du Backend

```bash
cd backend

# Créer un environnement virtuel Python
python -m venv venv
source venv/bin/activate  # Sur Windows: venv\Scripts\activate

# Installer les dépendances
pip install -r requirements.txt

# Configurer les variables d'environnement
# Éditer le fichier .env avec vos informations MongoDB
nano .env
```

**Fichier `.env` à configurer :**
```
MONGO_URL=mongodb://localhost:27017/
DB_NAME=cv_database
CORS_ORIGINS=http://localhost:3000,https://votre-domaine.com
```

**Démarrer le backend :**
```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Étape 3 : Configuration du Frontend

```bash
cd ../frontend

# Installer les dépendances
yarn install

# Configurer l'URL du backend
# Créer un fichier .env dans /frontend/
nano .env
```

**Fichier `.env` frontend :**
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Démarrer le frontend :**
```bash
yarn start
```

Le site sera accessible sur : **http://localhost:3000**

---

## 📝 Personnalisation

### 1. Ajouter votre Photo

Remplacer le placeholder dans `/frontend/src/components/Hero.jsx` :
- Ajouter votre photo dans `/frontend/public/images/profile.jpg`
- Mettre à jour le code pour utiliser votre vraie photo

### 2. Ajouter vos PDF de CV

Placer vos fichiers PDF dans `/frontend/public/cv/` :
- `CV_Anis_MNASRI_FR.pdf`
- `CV_Anis_MNASRI_EN.pdf`

Le bouton "Télécharger CV" téléchargera automatiquement ces fichiers.

### 3. Mettre à jour les liens sociaux

Dans `/frontend/src/data/mockData.js`, modifier :
```javascript
contact: {
  github: "https://github.com/votre-username",
  linkedin: "https://linkedin.com/in/votre-profil"
}
```

---

## 🌐 Déploiement en Production

### Option 1 : Déploiement sur Vercel (Frontend) + Railway (Backend)

**Frontend sur Vercel :**
1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repository GitHub
3. Configurer le projet :
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Root Directory: `frontend`
4. Ajouter la variable d'environnement :
   - `REACT_APP_BACKEND_URL=https://votre-backend.railway.app`

**Backend sur Railway :**
1. Créer un compte sur [Railway](https://railway.app)
2. Créer un nouveau projet Python
3. Connecter votre repository
4. Configurer les variables d'environnement :
   - `MONGO_URL` (utiliser MongoDB Atlas)
   - `DB_NAME`
   - `CORS_ORIGINS`

### Option 2 : Déploiement sur un VPS (Linux)

```bash
# Installer Nginx
sudo apt update
sudo apt install nginx

# Configurer Nginx comme reverse proxy
sudo nano /etc/nginx/sites-available/cv-website

# Installer PM2 pour gérer les processus
npm install -g pm2

# Démarrer le backend avec PM2
cd backend
pm2 start "uvicorn server:app --host 0.0.0.0 --port 8001" --name cv-backend

# Builder le frontend
cd ../frontend
yarn build

# Copier les fichiers build vers Nginx
sudo cp -r build/* /var/www/html/

# Redémarrer Nginx
sudo systemctl restart nginx
```

---

## 🔧 Structure du Projet

```
cv-anis-mnasri-complete/
├── frontend/
│   ├── src/
│   │   ├── components/     # Composants React
│   │   ├── pages/          # Pages (Home, Projects, PrintableCV)
│   │   ├── data/           # Données du CV (mockData.js)
│   │   ├── context/        # Context API (langue)
│   │   └── hooks/          # Custom hooks (toast)
│   ├── public/
│   │   └── cv/            # Fichiers PDF à ajouter
│   └── package.json
├── backend/
│   ├── models/            # Modèles Pydantic
│   ├── routes/            # Routes API
│   ├── server.py          # Application FastAPI
│   └── requirements.txt
├── contracts.md           # Documentation API
└── INSTRUCTIONS_CV_PDF.md # Instructions PDF
```

---

## 🎨 Fonctionnalités

✅ **Site bilingue** (Français/Anglais) avec basculement instantané
✅ **Design responsive** (Mobile, Tablet, Desktop)
✅ **Navigation fluide** avec scroll smooth et header fixe
✅ **Timeline animée** pour l'expérience professionnelle (17 ans)
✅ **11 catégories de compétences techniques** détaillées
✅ **Page projets dédiée** avec liens GitHub et documentation
✅ **Formulaire de contact fonctionnel** avec validation
✅ **Backend API REST** avec MongoDB
✅ **CV imprimable** en PDF via le navigateur
✅ **Footer complet** avec liens sociaux

---

## 📧 Support et Contact

Pour toute question ou assistance :
- **Email** : anis.mnsri@gmail.com
- **Téléphone** : +33 (6) 12 60 35 05

---

## 📄 Licence

Ce code est fourni pour usage personnel d'Anis MNASRI.

---

## 🔄 Mises à jour du Contenu

Pour mettre à jour le contenu du CV, modifiez le fichier :
`/frontend/src/data/mockData.js`

Toutes les sections (profil, compétences, expérience) y sont centralisées.

---

**Bon déploiement ! 🚀**
