FROM node:22.20-alpine3.22

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY ./ .

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]
