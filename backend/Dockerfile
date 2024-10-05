FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn global add @nestjs/cli@8.0.0

RUN npm install --force

COPY . .

EXPOSE 5000

CMD npm run start:dev