# Utilise une image de base node.js
FROM node:20-alpine3.18

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8080

CMD ["yarn", "start"]
