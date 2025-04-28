# Exercita365

## About Exercita365

_Exercita365_ is an API for registering exercise locations. It allows users to see all registered locals on the platform and register their contributions. This app was developed as a final project in the academy SENAI, FMT.

## Problem solved

Finding the appropriate locations to make exercises could be challenging. ExerciseOpenAir solves this problem by providing a friendly platform that lists locals for physical activities.

## Tecnologies and libraries

- _[NodeJS](https://nodejs.org/en)_
- _[Express](https://expressjs.com/)_
- _[Axios](https://www.npmjs.com/package/axios)_
- _[Bcryptjs](https://www.npmjs.com/package/bcryptjs)_
- _[Swagger](https://swagger.io/docs/open-source-tools/swagger-ui/development/setting-up/?sbsearch=node)_
- _[PostgreSQL](https://www.postgresql.org/)_
- _[Docker](https://www.docker.com/)_
- _APIs:_ [ViaCep](https://viacep.com.br/) and [Awesomeapi](https://docs.awesomeapi.com.br/api-cep) to consult CEPs.
  
## Pré-requisits

- NodeJS
- PostgreSQL

## Steps to execute

1. Clone the repository.
2. Adjust the environment variables in the .en file.
3. Install the necessary libraries using the command
   ```bash
   npm install
   ```
5. Execute the command
   ```bash
   npm run start:db
   ```
   to create the database and run the seeders and migrations.
7. Generate the swagger documentation with the command
   ```bash
   npm run swagger
   ```
9. Star the server with
    ```bash
   npm run start:dev
    ```
11. Acess to [http://localhost:3000/docs/](http://localhost:3000/docs/) to visualize the swagger documentation in the browser.

##### Perform steps 1 to 5 only once you run the project.

# Steps to create an image Docker with Docker Desktop and run it (docker-compose.yml)

1. Open Docker Desktop.
2. Open the terminal in the root repository. It could be the VS Code terminal.
3. Run
   ```bash
   docker-compose build
   ```
   to build the image using the Docker Compose file.
5. Run
   ```bash
   docker-compose up -d --build
   ```
   to construct the container and install the containers inside the project.
   
## Database Model
![image](https://github.com/user-attachments/assets/b1f658d2-0752-4398-9a5a-0dae03f76f5f)

<!-- ![Modelo de Dados](./src/assets/modelo-de-dados.png created in https://drawsql.app/ -->

## Project structure

```
src
├── assets
│  └── modelo-de-dados.png
├── config
│  ├── docs
│  │  ├── autoGen.swagger.js
│  │  └── swagger.json
│  └── database.config.js
├── controllers
│  ├── AtividadeController.js
│  ├── CadastrarController.js
│  ├── DashboardController.js
│  ├── LocalController.js
│  ├── LoginController.js
│  ├── PermissoesController.js
│  ├── PermissoesUsuarioController.js
│  ├── UsuarioAdminController.js
│  └── UsuarioController.js
├── database
│  ├── migrations
│  │  ├── 20240711221146-create-table-usuarios.js
│  │  ├── 20240723234314-create-table-locais.js
│  │  ├── 20240724202635-create-table-atividades.js
│  │  ├── 20240724202647-create-table-local_atividades.js
│  │  ├── 20240930221128-mudar-nomeAtividade-to-enum-tabela-atividades.js
│  │  ├── 20241108220955-add-unique-constraint-to-cpf.js
│  │  ├── 20241108223929-add-enum-constraint-to-sexo.js
│  │  ├── 20241130001407-create-table-permissions.js
│  │  ├── 20241202232330-create-table-usuarios-permissoes.js
│  │  └── 20250402193151-delete-type-enum-from-atividades.js
│  ├── seeders
│  │  ├── 20240724215754-usuarios.js
│  │  ├── 20240726205241-atividades.js
│  │  ├── 20240928010901-locais.js
│  │  ├── 20240930183012-local-atividades.js
│  │  ├── 20241130002507-permissoes.js
│  │  └── 20241202233036-usuarios-permissoes.js
│  └── connection.js
├── middlewares
│  ├── validaToken.js
│  └── verificaPermissao.js
├── models
│  ├── Atividade.js
│  ├── Local.js
│  ├── LocalAtividade.js
│  ├── Permissao.js
│  ├── Usuario.js
│  └── UsuarioPermissao.js
├── routes
│  ├── atividades.routes.js
│  ├── cadastrar.routes.js
│  ├── dashboard.routes.js
│  ├── locais.routes.js
│  ├── login.routes.js
│  ├── permissoes.routes.js
│  ├── permissoesUsuario.routes.js
│  ├── routes.js
│  ├── usuarios.routes.js
│  └── usuariosAdmin.routes.js
├── services
│  └── mapaService.js
├── index.js
└── server.js
.env_example
.gitignore
docker-compose.yml
Dockerfile
entrypoint.sh
package-lock.json
package.json
readme.md
```
<!--
## Steps to deploy in render without Docker file (Free version)

- Create the **Postgres** container. By default, render has a template to do that.
- Set all the environment variables for this container. In Hostname, set the internal hostname used by your Render services. You need to find the string between the @ and the database name in the **Internal Database URL**. Example: postgresql://username:string_1@string_2/database_name. In this case, it is the string 2.
- Create a new **Web Service** to build and deploy the api.
- Upload the GitHub project to the Render Web Service. Set the environment variables. Here we have some important cases:
  - APP_HOST=api_name.onrender.com
  - DB_HOST= string_2
  - DB_SSL= true
- Set the branch **main** to deploy.
- Set the following commands
  - Build Command ```npm install```.
  - Start Command (only first time): ```npm run swagger && npm run start:db && npm run start:prod```.
  - Start Command: ```npm run swagger && npm run start:prod```.
-->

## Improvements

- Front-end Integration.
- Improve the project organization and divide the responsibilities.
- _Tests:_ Include unitary and integration tests.

## Contribuitions

Contribution and suggestions are welcome. (frankosorio4@gmail.com)

## Autors

- [@TThaz](https://www.github.com/TThaz)
- [@douglascugliarisenai](https://www.github.com/douglascugliarisenai) 
- [@alanamandimifsc](https://www.github.com/alanamandimifsc) 
- [@frankosorio4](https://www.github.com/frankosorio4) 
