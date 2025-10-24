# Portfolio React - HANCHOUCH Ahmed Yassine

Un portfolio moderne et responsive développé avec React, Framer Motion et EmailJS.

## 🚀 Fonctionnalités

- **Design moderne** avec animations fluides
- **Mode sombre/clair** avec transition automatique
- **Section Skills** avec barres de progression animées
- **Formulaire de contact** fonctionnel avec EmailJS
- **Responsive design** pour tous les appareils
- **Arrière-plan animé** dans la section Hero

## 📧 Configuration EmailJS

Pour que le formulaire de contact fonctionne et envoie de vrais emails, suivez ces étapes :

### 1. Créer un compte EmailJS
- Allez sur [EmailJS.com](https://www.emailjs.com/)
- Créez un compte gratuit
- Vérifiez votre email

### 2. Configurer un service email
- Dans le dashboard EmailJS, allez dans "Email Services"
- Cliquez sur "Add New Service"
- Choisissez votre fournisseur email (Gmail, Outlook, etc.)
- Connectez votre compte email

### 3. Créer un template email
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Utilisez ce template :

```html
Nouveau message de contact depuis votre portfolio

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio React
```

### 4. Récupérer les clés
- **Service ID** : Trouvé dans "Email Services"
- **Template ID** : Trouvé dans "Email Templates"
- **Public Key** : Trouvé dans "Account" > "API Keys"

### 5. Configurer le code
Remplacez dans `src/components/Contact.jsx` :

```javascript
// Ligne 15
emailjs.init("VOTRE_PUBLIC_KEY");

// Lignes 32-33
'VOTRE_SERVICE_ID',
'VOTRE_TEMPLATE_ID',
```

## 🛠️ Installation

```bash
npm install
npm run dev
```

## 📦 Dépendances principales

- React 19
- Framer Motion (animations)
- EmailJS (envoi d'emails)
- React Icons (icônes)

## 🎨 Personnalisation

- Modifiez les informations personnelles dans les composants
- Ajustez les couleurs dans les fichiers CSS
- Personnalisez les animations dans les composants Framer Motion

## 📱 Responsive

Le portfolio s'adapte automatiquement à :
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌙 Mode sombre

Le thème s'adapte automatiquement aux préférences système et peut être basculé manuellement.
