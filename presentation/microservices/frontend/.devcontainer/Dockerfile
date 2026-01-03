# Utiliser une image Node.js LTS comme base
FROM node:20-alpine3.18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
# COPY package.json ./

# Installer les dépendances
# RUN npm install

# Copier tous les autres fichiers du projet dans le répertoire de travail du conteneur
COPY . .

# Construire l'application Next.js
# RUN npm run build

# Exposer le port sur lequel l'application fonctionnera
EXPOSE 4200

# Commande pour démarrer l'application Next.js en mode production
CMD ["bash"]
