# Fateweaver

Веб-приложение для мастеров и игроков Настольно-Ролевых Игр (НРИ). Позволяет структурировать информацию о мире, персонажах и событиях.

## Основные возможности (планируемые)

- Регистрация и авторизация.
- Создание статей с Markdown.
- Интерактивная карта мира.
- Таймлайны событий.
- Визуализация связей (графы).

## Запуск

### Требования

- Docker Deskop

### Установка и запуск

1. **Клонировать репозиторий:**

   ```bash
   git clone <URL_репозитория>
   cd fateweaver
   ```

2. **Запустить через Docker Compose:**
   ```bash
   docker-compose up -d --build
   ```

После успешного запуска доступны:

- **Клиент**: [http://localhost:5173](http://localhost:5173)
- **Сервер**: [http://localhost:3000](http://localhost:3000)
- **MinIO Консоль**: [http://localhost:9001](http://localhost:9001) (Login: `fateweaver_admin`, Pass: `FateWeaverSecretKey`)

Подробнее см. [docs/startup.md](docs/startup.md).
