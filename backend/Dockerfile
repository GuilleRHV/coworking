# Usa una imagen base de PHP 8.1
FROM php:8.1-fpm

# Instala las dependencias necesarias
RUN apt-get update && apt-get install -y \
    nginx \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libxml2-dev \
    zip \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql zip \
    && apt-get clean

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Establece el directorio de trabajo en /var/www
WORKDIR /var/www

# Copia los archivos de tu aplicación Laravel al contenedor
COPY . /var/www

# Instala las dependencias de Laravel usando Composer
RUN composer install --no-dev --optimize-autoloader

# Exponemos el puerto 80 para Nginx
EXPOSE 80

# Copia el archivo de configuración de Nginx al contenedor
COPY ./nginx/default.conf /etc/nginx/sites-available/default

# Arranca Nginx y PHP-FPM
CMD service nginx start && php-fpm
