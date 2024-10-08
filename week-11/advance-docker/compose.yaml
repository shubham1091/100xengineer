version: "3.9"

services:
  frontend:
    container_name: frontend
    image: frontend
    build:
      context: ./frontend
      dockerfile: frontend.dockerfile
    ports:
      - 3000:3000
    environment:
      - VITE_API_URL=http://localhost:4000
    restart: always
    depends_on:
      - backend
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3

  backend:
    container_name: backend
    image: backend
    build:
      context: ./backend
      dockerfile: backend.dockerfile
    ports:
      - 4000:4000
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/postgres?schema=public
    command: node index.js
    restart: always
    depends_on:
      - db
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:4000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    volumes:
      - backend-data:/app/data

  db:
    container_name: db
    image: postgres:12
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    ports:
      - 5432:5432
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - app-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 30s
      timeout: 10s
      retries: 5

networks:
  app-network:
    driver: bridge

volumes:
  pgdata: {}
  backend-data: {}
