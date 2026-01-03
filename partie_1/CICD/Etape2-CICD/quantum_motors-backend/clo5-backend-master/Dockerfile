FROM node:20-alpine3.18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires
COPY . .

# Installer les dépendances
RUN yarn install

RUN yarn build

# Exposer le port sur lequel le serveur fonctionnera
EXPOSE 3000

# Commande pour démarrer le serveur Express Node.js
CMD ["yarn", "start"]
