# Utiliser une image Node.js LTS comme base
FROM node:20-alpine3.18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et yarn.lock pour installer les dépendances
# COPY package.json ./

# Installation de Yarn
# RUN npm install -g yarn


# Copier le reste des fichiers du projet
COPY . .
# Installer les dépendances
RUN yarn install

# # Construire l'application Next.js
RUN yarn build

# Exposer le port sur lequel l'application fonctionnera
EXPOSE 4200

# Commande pour démarrer l'application Next.js en mode production
CMD ["yarn", "start"]
