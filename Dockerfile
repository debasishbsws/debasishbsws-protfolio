FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

COPY . .

ENV SERVER_PORT=3000

EXPOSE $SERVER_PORT

CMD ["npm", "start"]
