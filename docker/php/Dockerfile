# 公開レポジトリからベースイメージをインポート（Laravel9はphp8.0以上が必須）
FROM php:8.2.1-fpm

# COPY php.ini
COPY ./docker/php/php.ini /usr/local/etc/php/php.ini

# Composer install（マルチステージビルド）
# マルチステージビルドを使用すると、composerのバージョン管理が楽（今回は常に最新版を指定）
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# install Node.js（マルチステージビルド）
# Vue.js導入に必要（Breezeにも必要）
COPY --from=node:latest /usr/local/bin /usr/local/bin
COPY --from=node:latest /usr/local/lib /usr/local/lib

# パッケージ管理ツール（apt-get）の更新＆必要パッケージのインストール
# build時に実行される
RUN apt-get update \
    && apt-get -y install \
    git \
    zip \
    unzip \
    vim \
    # PHP拡張モジュール（Laravelに必要で不足しているものをインストール）：pdo_mysql（PHPからMySQLへのアクセスを可能にする）、bcmath
    && docker-php-ext-install pdo_mysql bcmath \
    # 日本語化
    # && apt-get install -y locales \
    # && locale-gen ja_JP.UTF-8 \
    # && echo "export LANG=ja_JP.UTF-8" >> ~/.bashrc \
    # gitの設定
    && git config --global user.name "shimamura10" \
    && git config --global user.email "kshimamura1717@gmail.com" \
    && git config --global --add safe.directory /var/www/html 
    # 作業ユーザーとユーザーグループの作成
    # && adduser shimamura10 \
    # && groupadd -g 1000 shimamura10 \
    # && useradd -m -s /bin/bash -u 1000 -g 1000 shimamura10 \
    # && chown -R shimamura10:shimamura10 /var/www/html \
    # && gpasswd -a shimamura10 sudo 
    

# コンテナに入ったとき（docker-compose exec app bash）の作業ディレクトリを指定
WORKDIR /var/www/html

# デフォルトユーザーの指定
# USER 1000