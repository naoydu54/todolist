
# ToDo List Application

## Description

Ce projet est une application de gestion de tâches (ToDo List) créée avec **Symfony** pour le backend et **React** pour le frontend. L'application est stylisée avec **Tailwind CSS** et utilise **Webpack Encore** pour la gestion des assets.

### Fonctionnalités :

- Ajout de nouvelles tâches
- Mise à jour du statut d'une tâche (complété ou non)
- Suppression des tâches
- Interface utilisateur moderne avec des boutons interactifs et un dégradé de fond

## Technologies utilisées

- **Symfony** (API Backend)
- **React** (Frontend avec composants dynamiques)
- **Tailwind CSS** (Stylisation moderne et réactive)
- **Webpack Encore** (Gestion des assets)

## Prérequis

- PHP 8 ou plus
- Composer
- Node.js & Yarn
- Symfony CLI (optionnel mais recommandé)

## Installation

1. **Cloner le projet :**

```bash
git clone https://github.com/votre-repo/todolist-symfony-react.git
cd todolist-symfony-react
```

2. **Installer les dépendances PHP :**

```bash
composer install
```

3. **Installer les dépendances JavaScript :**

```bash
npm install
```

4. **Configurer la base de données :**

Assurez-vous que votre fichier `.env` contient les bonnes informations de connexion à la base de données. Si nécessaire, modifiez-le en fonction de vos besoins.

Exemple d'une base de données SQLite :

```bash
DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
```

Créez la base de données et exécutez les migrations :

```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

5. **Compiler les assets :**

```bash
npm run watch
```

Ou pour la production :

```bash
npm run build
```

6. **Lancer le serveur Symfony :**

```bash
symfony server:start
```



## Utilisation

Une fois que le projet est lancé, vous pouvez :

- Ajouter une tâche dans la to-do list
- Cocher/décocher les tâches comme "complétées"
- Supprimer les tâches
- Profiter de l'interface stylée avec un fond en dégradé et des boutons interactifs.

## API Endpoints

L'API pour la gestion des tâches est exposée via **Symfony API Platform**.

### Endpoints disponibles :

- `GET /api/todo_lists` : Récupérer toutes les tâches
- `POST /api/todo_lists` : Ajouter une nouvelle tâche
- `PATCH /api/todo_lists/{id}` : Mettre à jour le statut d'une tâche
- `DELETE /api/todo_lists/{id}` : Supprimer une tâche

## Commandes utiles

- **Lancer le serveur de développement :**

```bash
symfony server:start
```

- **Compiler les assets (développement) :**

```bash
npm encore dev
```

- **Compiler les assets (production) :**

```bash
npm encore production
```

- **Exécuter les tests (s'il y a des tests PHPUnit ou Jest)** :

```bash
php bin/phpunit  # Pour les tests PHP
yarn test        # Pour les tests React
```

## Structure du projet

```
├── assets
│   ├── app.js               # Point d'entrée JavaScript
│   ├── styles
│   │   └── app.css          # Styles avec Tailwind CSS
│   └── components
│       └── ToDoList.jsx     # Composant React principal
├── config
├── public
├── src
│   ├── Controller
│   │   └── ToDoListController.php # API Backend Symfony
│   └── Entity
│       └── ToDoList.php      # Entité Doctrine pour les tâches
└── templates
└── base.html.twig        # Template de base pour l'application
```

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une **pull request** ou à soumettre des **issues**.

