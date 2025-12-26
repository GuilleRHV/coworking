# Usa una imagen base de PHP con FPM y extensiones necesarias para Laravel
FROM php:8.1-fpm

# Instalar las dependencias de Laravel
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    git \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql

# Copiar el proyecto al contenedor
COPY . /var/www

# Establecer el directorio de trabajo
WORKDIR /var/www

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalar dependencias de Laravel
RUN composer install

# Exponer el puerto
EXPOSE 9000
CMD ["php-fpm"]

