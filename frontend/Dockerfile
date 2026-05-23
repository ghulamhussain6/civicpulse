# Stage 1: Build (No changes here)
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# UPDATED: Matches the outputPath in angular.json
COPY --from=build /app/dist/frontend /usr/share/nginx/html_internal

# Optional: Add a custom Nginx config if you plan to use Angular Routing later
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
