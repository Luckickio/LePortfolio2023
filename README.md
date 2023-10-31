# Le Portfolio

Bienvenue dans le répertoire de mon portfolio où je présente mes compétences et projets en tant que développeur polyvalent.

## Structure principale du projet

Le portfolio est construit avec React et structuré en plusieurs composants, chacun représentant une section différente de la page.

## Aperçu des composants

### Navbar

Le composant Navbar facilite la navigation entre les différentes sections du portfolio avec un menu rétractable adaptatif pour les appareils mobiles.

### Hero

Le composant Hero présente une introduction avec un appel à l'action pour prendre contact.

### About

Le composant About utilise la bibliothèque Typed.js pour créer une animation typographique illustrant des éléments de code dans un "Terminal" tout en présentant mes qualités principales.

### Experience

Le composant Experience mappe sur deux tableaux JSON, l'un contenant des compétences techniques et l'autre contenant des expériences professionnelles, pour générer des listes de compétences et d'expériences.

### Projects

Le composant Projects mappe sur un tableau JSON contenant des informations sur différents projets et génère une carte de projet pour chacun en utilisant le composant ProjectCard.

### ProjectCard

Le composant ProjectCard prend un objet projet en prop et affiche les informations du projet.

### Fichier Utils

utils est un fichier qui contient une fonction getImageUrl utilisée pour générer des URLs pour les images stockées localement.
