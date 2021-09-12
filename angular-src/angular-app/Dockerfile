# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install bootstrap 
RUN npm install jquery
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html