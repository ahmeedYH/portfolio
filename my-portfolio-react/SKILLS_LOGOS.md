# 🎨 Guide pour ajouter des logos aux compétences

## 📝 Comment personnaliser les logos

Dans le fichier `src/components/Skills.jsx`, vous pouvez modifier le tableau `technologies` pour ajouter vos propres logos :

### 🔧 Structure actuelle :
```javascript
const technologies = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  // ... autres technologies
];
```

### 🎯 Options de logos :

#### 1. **Logos officiels (recommandé)**
```javascript
{ name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' }
{ name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' }
{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' }
```

#### 2. **CDN DevIcons (gratuit)**
Utilisez le CDN DevIcons pour des logos officiels :
```javascript
{ name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' }
{ name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' }
{ name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
```

#### 3. **Logos locaux**
```javascript
{ name: 'React.js', logo: '/icons/react.svg' }
{ name: 'Node.js', logo: '/icons/nodejs.svg' }
```

### 🎨 Logos disponibles via DevIcons :

| Technologie | URL DevIcons |
|-------------|--------------|
| HTML5 | `html5/html5-original.svg` |
| CSS3 | `css3/css3-original.svg` |
| JavaScript | `javascript/javascript-original.svg` |
| React | `react/react-original.svg` |
| Node.js | `nodejs/nodejs-original.svg` |
| Python | `python/python-original.svg` |
| Java | `java/java-original.svg` |
| Git | `git/git-original.svg` |
| GitHub | `github/github-original.svg` |
| MongoDB | `mongodb/mongodb-original.svg` |
| MySQL | `mysql/mysql-original.svg` |
| PostgreSQL | `postgresql/postgresql-original.svg` |
| Vue.js | `vuejs/vuejs-original.svg` |
| Angular | `angular/angular-original.svg` |
| Docker | `docker/docker-original.svg` |
| AWS | `amazonwebservices/amazonwebservices-original.svg` |

### 🚀 Ajout de nouvelles technologies :

```javascript
// Exemple d'ajout d'une nouvelle technologie
{ name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
{ name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
{ name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
{ name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg' },
```

### 💡 Conseils :

1. **Qualité** : Utilisez les logos officiels pour un look professionnel
2. **Performance** : Le CDN DevIcons est optimisé et rapide
3. **Cohérence** : Tous les logos ont le même style et la même taille
4. **Responsive** : Les images SVG s'adaptent parfaitement aux différentes tailles d'écran

### 🎯 Personnalisation avancée :

#### Logos locaux :
```javascript
{ name: 'React.js', logo: '/icons/react.svg' }
```

#### Logos avec couleurs personnalisées :
```javascript
{ name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' }
```

#### Logos monochromes :
```javascript
{ name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' }
```

### 📚 Ressources utiles :

- **DevIcons CDN** : https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/
- **Liste complète** : https://devicon.dev/
- **Couleurs** : Utilisez `-original.svg` pour les couleurs, `-plain.svg` pour les versions monochromes
