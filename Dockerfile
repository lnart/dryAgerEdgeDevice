# Use the official Node.js 16 image from Docker Hub, for ARM64 architecture
FROM arm64v8/node:16

# Create app directory in container
WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
