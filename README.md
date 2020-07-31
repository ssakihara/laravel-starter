# Laravel React Starter

## Included

-   [Laravel 6.0](https://laravel.com/docs/6.0)
-   [Laravel-admin](https://laravel-admin.org/docs/#/)
-   [React](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Axios](https://github.com/mzabriskie/axios)
-   [Authentication with JWT Token](https://github.com/tymondesigns/jwt-auth)
-   [php-cs-fixer](https://cs.symfony.com)
-   [js-beautify](https://github.com/beautify-web/js-beautify)
-   [eslint](https://eslint.org)
-   [prettier](https://prettier.io)
-   [husky](https://github.com/typicode/husky)
-   [lint-staged](https://github.com/okonet/lint-staged)

## Installation

-   Clone the repository
-   Copy `.env.example` to `.env`
-   Configure `.env`
-   Run `docker-compose build`
-   Run `docker-compose up -d`
-   Run `docker-compose exec app composer install`
-   Run `docker-compose exec app php artisan key:generate`
-   Run `docker-compose exec app php artisan jwt:secret`
-   Run `docker-compose exec app php artisan migrate --seed`
-   Run `docker-compose exec node yarn install`
-   Run `docker-compose exec node yarn dev`

## Usage

-   [Application route](http://localhost)
-   [Admin route](http://admin.localhost)
    -   ID admin / PASS admin
