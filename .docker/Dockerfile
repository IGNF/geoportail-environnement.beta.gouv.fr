# Spécifier l'argument de registre pour utiliser une autre source si nécessaire
ARG registry=docker.io
FROM ${registry}/node:18 AS build

# Installer les dépendances nécessaires pour les tests (y compris Chromium)
RUN apt-get update && apt-get install -y chromium
ENV CHROME_BIN='/usr/bin/chromium'

# Installer Angular CLI
RUN npm install -g @angular/cli

# Créer un répertoire pour l'application Angular
WORKDIR /app

# Copier le package.json et le package-lock.json
COPY ./package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application Angular dans le répertoire de travail
COPY . /app

# **Exécuter les tests unitaires Angular**
RUN ng test --watch=false --code-coverage 

# Construire l'application Angular pour la production
RUN ng build --configuration production --output-path=dist

# Étape finale : image légère pour la production
FROM ${registry}/nginxinc/nginx-unprivileged:stable AS prod

COPY --from=build /app/dist/browser /usr/share/nginx/html
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf

# Étape de développement (optionnelle)
FROM ${registry}/node:18 AS dev
USER root
ENV CHROME_BIN='/usr/bin/chromium'
# Installer les dépendances nécessaires pour les tests (y compris Chromium)
RUN apt-get update && apt-get install -y chromium 
    # Installer Angular CLI
RUN npm install -g @angular/cli

# Utiliser un répertoire de travail
WORKDIR /app

# Copier le package.json et le package-lock.json
COPY ./package*.json ./

# Installer les dépendances
RUN npm install --include=dev

# Copier le reste de l'application Angular
COPY . /app

# Exposer le port 4200 pour ng serve
EXPOSE 4200

# Démarrer l'application en mode développement
CMD ["ng", "serve", "--host", "0.0.0.0"]
