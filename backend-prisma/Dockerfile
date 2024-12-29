FROM node:alpine3.16
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV API_URL=http://localhost:8085/
EXPOSE 3000
ENTRYPOINT [ "node", "server.js" ]