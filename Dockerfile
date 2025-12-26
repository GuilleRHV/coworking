# 1️⃣ Imagen base con PHP y extensiones necesarias
FROM php:8.2-fpm

# 2️⃣ Instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libonig-dev \
    libpq-dev \
    && docker-php-ext-install pdo pdo_mysql zip mbstring

# 3️⃣ Set working directory
WORKDIR /var/www/html

# 4️⃣ Copia todo el proyecto al contenedor
COPY . .

# 5️⃣ Instala Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

# 6️⃣ Instala dependencias PHP
RUN composer install --no-dev --optimize-autoloader

# 7️⃣ Expone el puerto (Render lo asignará a $PORT)
EXPOSE 8000

# 8️⃣ Comando final: servidor PHP escuchando en el puerto de Render
CMD ["php", "-S", "0.0.0.0:$PORT", "-t", "public"]
