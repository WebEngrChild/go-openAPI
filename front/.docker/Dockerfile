# .docker/Dockerfile
FROM node:20

WORKDIR /app

COPY ./front/package*.json ./
RUN npm install

COPY ./front .

RUN npm run build

# アプリケーションを起動
CMD ["npm", "run", "start"]
