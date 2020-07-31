FROM php:7.3-fpm

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y libpq-dev git zip unzip && \
    apt-get clean && \
    rm -rf /var/cache/apt

RUN docker-php-ext-install mbstring pdo pdo_pgsql

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer && \
    chmod +x /usr/local/bin/composer
