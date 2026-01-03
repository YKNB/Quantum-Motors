# Utiliser une image Node.js LTS comme base
FROM node:20-alpine3.18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le reste des fichiers du projet
COPY . .

# Installer les dépendances
RUN yarn install

# Exposer le port sur lequel l'application fonctionnera
EXPOSE 4200

# Commande pour démarrer l'application Next.js en mode développement
CMD ["yarn", "dev"]
