# Utilise une image de base node.js
FROM node:20-alpine3.18

WORKDIR /app


COPY . .

RUN yarn install
RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]
