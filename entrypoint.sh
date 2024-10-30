#!/bin/sh

# Verificar se o banco de dados está pronto
until pg_isready -h $PGHOST -U $PGUSER; do
  echo "Esperando pelo banco de dados..."
  sleep 2
done

# Rodar migrações e seeds
npm run db:migrate
npm run db:seed

# Iniciar a aplicação
npm run start:prod
