# FROM node:16-alpine
# WORKDIR /app
# COPY . .
# RUN npm install
# EXPOSE 3000
# CMD ["npm", "start"]
FROM node:16-alpine
WORKDIR /app/public
COPY . .
RUN npm install --only=production
EXPOSE 3000
CMD ["npm","start"]


