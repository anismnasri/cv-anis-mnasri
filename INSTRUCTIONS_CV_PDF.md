# Instructions pour ajouter vos fichiers CV PDF

## Solution Actuelle (Temporaire)

Le bouton "Télécharger CV" / "Download CV" ouvre actuellement une **page web imprimable** qui contient tout le contenu de votre CV en format optimisé pour l'impression.

### Comment l'utiliser maintenant :

1. Cliquez sur le bouton "Télécharger CV"
2. Une nouvelle page s'ouvre avec votre CV formaté pour l'impression
3. Utilisez **Ctrl+P** (Windows/Linux) ou **Cmd+P** (Mac)
4. Sélectionnez **"Enregistrer au format PDF"** ou **"Save as PDF"**
5. Le CV sera sauvegardé en PDF sur votre ordinateur

---

## Solution Permanente (Ajouter vos vrais PDF)

Pour que le bouton télécharge directement un fichier PDF :

### Étape 1 : Préparer vos fichiers PDF

Vous avez deux options :

**Option A : Convertir vos fichiers .docx en PDF**
- Ouvrir `DT SAPIENS Ingénieur QA AMI- (1).docx` dans Word/LibreOffice
- Fichier → Enregistrer sous → Format PDF
- Nommer le fichier : `CV_Anis_MNASRI_FR.pdf`

- Ouvrir `cv_anis_mnasri_eng.docx` dans Word/LibreOffice  
- Fichier → Enregistrer sous → Format PDF
- Nommer le fichier : `CV_Anis_MNASRI_EN.pdf`

**Option B : Créer de nouveaux PDF formatés**
- Utiliser la page imprimable (http://localhost:3000/cv-print)
- Imprimer en PDF comme décrit ci-dessus
- Renommer selon les noms requis

### Étape 2 : Placer les fichiers PDF

Copiez vos deux fichiers PDF dans le dossier :
```
/app/frontend/public/cv/
```

Noms exacts requis :
- `CV_Anis_MNASRI_FR.pdf` (version française)
- `CV_Anis_MNASRI_EN.pdf` (version anglaise)

### Étape 3 : Vérifier

Une fois les fichiers ajoutés :
1. Rafraîchir la page web
2. Cliquer sur "Télécharger CV"
3. Le PDF devrait se télécharger automatiquement
4. Si les PDF ne sont pas trouvés, la page imprimable s'ouvre (comportement de secours)

---

## Structure actuelle des fichiers

```
/app/frontend/
├── public/
│   └── cv/
│       ├── README.txt
│       ├── CV_Anis_MNASRI_FR.pdf  ← À AJOUTER
│       └── CV_Anis_MNASRI_EN.pdf  ← À AJOUTER
└── src/
    └── pages/
        └── PrintableCV.jsx  (page de secours)
```

---

## Commandes utiles

### Vérifier si les fichiers sont présents :
```bash
ls -la /app/frontend/public/cv/
```

### Copier des fichiers PDF (exemple) :
```bash
cp /chemin/vers/votre/CV_FR.pdf /app/frontend/public/cv/CV_Anis_MNASRI_FR.pdf
cp /chemin/vers/votre/CV_EN.pdf /app/frontend/public/cv/CV_Anis_MNASRI_EN.pdf
```

---

## Notes importantes

- Les noms de fichiers doivent être **EXACTEMENT** comme indiqué (respecter majuscules/minuscules)
- Les fichiers doivent être au format `.pdf`
- Le site détecte automatiquement la langue de l'utilisateur et propose le bon CV
- La page imprimable reste disponible comme solution de secours
