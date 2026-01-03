FROM mysql:8.0

# Définir les variables d'environnement
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=quantum-motors
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=P@ssw0rd!

# Copier le fichier SQL initial dans le conteneur
COPY ../quantum-motors-initial.sql /docker-entrypoint-initdb.d/

# Exposer le port MySQL
EXPOSE 3306

# Commande par défaut pour démarrer le conteneur MySQL
CMD ["mysqld"]
