
FROM node:12

# Create app directory
WORKDIR /app


COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 50052
CMD [ "node", "index.js" ]