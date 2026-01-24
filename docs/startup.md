# Руководство по запуску Fateweaver

## Предварительные требования

- Установленный и запущенный **Docker Desktop**.

## Запуск приложения

Для запуска всех сервисов (клиент, сервер, базы данных) выполните команду в корне проекта:

```powershell
docker-compose up -d --build
```

Флаг `-d` запускает контейнеры в фоновом режиме.
Флаг `--build` пересобирает образы, если были изменения в зависимостях или конфигурации Dockerfile.

## Подключение к сервисам

По умолчанию приложение запускается со следующими параметрами:

### 1. Клиент (Frontend)

- **URL**: [http://localhost:5173](http://localhost:5173)
- **Технология**: React + Vite

### 2. Сервер (Backend API)

- **URL**: [http://localhost:3000](http://localhost:3000)
- **Health Check**: [http://localhost:3000/api/health](http://localhost:3000/api/health) (если реализован)
- **Технология**: Node.js + Express + Prisma

### 3. Инфраструктура

#### База данных (PostgreSQL)

Для подключения через внешний клиент (например, DBeaver, pgAdmin):

- **Host**: `localhost`
- **Port**: `5432`
- **Database**: `fateweaver`
- **User**: `postgres`
- **Password**: `password` (значение по умолчанию из `.env`)

_Внутри docker-сети хост называется `db`._

#### Объектное хранилище (MinIO)

- **Консоль администратора**: [http://localhost:9001](http://localhost:9001)
- **API Endpoint**: `http://localhost:9000`
- **User**: `minioadmin`
- **Password**: `minioadmin`

#### Redis

- **Host**: `localhost`
- **Port**: `6379`

## Остановка приложения

Чтобы остановить и удалить контейнеры, выполните:

```powershell
docker-compose down
```

Если вы хотите также удалить тома с данными (очистить БД), добавьте флаг `-v`:

```powershell
docker-compose down -v
```
