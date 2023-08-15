# Utilisez une image de base contenant Node.js pour construire l'application React
FROM node:14 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Utilisez une image légère pour servir l'application React
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]