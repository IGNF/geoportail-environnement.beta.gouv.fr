# Foreg-site

Reglementation en Foret. Application web Angular.

* [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7
* [Ngx DSFR](https://foad.phm.education.gouv.fr/edugouvfr/ngx-dsfr/1-11-9/?path=/docs/introduction-readme--docs) version 1.11.9

## Install via NPM

```bash
npm install
```

## Lancement en local (DEV)

```bash
npm start
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Install via docker

!!! Non adapter pour le développement de foreg-site

Téléchargement de l'image docker via le repository de github.


```bash
docker pull ghcr.io/ignf/foreg-site:{{ VERSION-TAG || 'vX.X.X'}}
```

### Running

Lancement de foreg-site via docker run :

```bash
docker run -p 8080:8080 ghcr.io/ignf/foreg-site:{{ VERSION-TAG || 'vX.X.X'}}
```

Le site est accesible via l'adresse : http://localhost:8080

## Install via docker-compose

Scritp du docker-compose à adapter selon le besoin
Local Build

```yaml
services:
  foreg-site:
    build:
      context: .
      dockerfile: .docker/Dockerfile
      target: prod  # Utilise l'étape "dev" pour le développement
    ports:
      - "8089:8080"  # Expose le port nginx

``` 
Cloud Build

```yaml
services:
  foreg-site:
    image: ghcr.io/ignf/foreg-site:{{ VERSION-TAG || 'vX.X.X'}}
    ports:
      - "8089:8080"  # Expose le port nginx
```


### build

```bash
docker compose build
```

### Running

```bash
docker compose up
```
Forcage du build avant de lancer l'application

```bash
docker compose up --build
```

### Down

```bash
docker compose down
```