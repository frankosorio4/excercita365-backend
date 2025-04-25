FROM node:18-slim

# Defina as variáveis de build
ARG APP_PORT_LOCAL
ARG APP_PORT_DOCKER

# Use as variáveis de build
ENV APP_PORT_LOCAL=${APP_PORT_LOCAL}
ENV APP_PORT_DOCKER=${APP_PORT_DOCKER}

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN apt-get update && apt-get install -y postgresql-client && npm install -y sequelize-cli

EXPOSE 3000

COPY entrypoint.sh /entrypoint.sh

# Adicionar permissões de execução ao script
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
