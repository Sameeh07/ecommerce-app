# FROM node:16-alpine
# WORKDIR /app
# COPY . .
# RUN npm install
# EXPOSE 5000
# CMD ["node", "server.js"]
FROM node:16-alpine

WORKDIR /app/server 

# Copy package.json first (only from root)
COPY package.json package-lock.json ./

# Install only backend dependencies
RUN npm install

# Now copy only backend files
COPY . .  
EXPOSE 5000

CMD ["node", "server.js"]
