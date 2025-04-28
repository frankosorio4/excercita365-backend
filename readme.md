# Exercita365

## About Exercita365

_Exerrcita365_ is an API for registering exercise locations. It allows users to see all registered locals on the platform and register their contributions. This app was developed as a final project in the academy Senai, FMT.

## Problem solved

Finding the appropriate locations to make exercises could be challenging. ExerciseOpenAir solves this problem by providing a friendly platform that lists locals for physical activities.

## Tecnologias Utilizadas

- _Back-end:_ NodeJS e Express
- _APIs:_ ViaCep and Awesomeapi to consult CEP and locations.
- _Database:_ PostgreSQL
- _Swagger:_ To do the documentation and test the API.
- _Docker:_ To create the needed containers.


## Modelo de Dados

![Modelo de Dados](./src/assets/modelo-de-dados.png)

## Project structure

```
├── src 
    ├── assets
    ├── config
    │   └── docs
    ├── controllers
    │   └── AtividadeController.js
    │   └── UsuarioController.js
    │   └── LocalController.js
    │   └── LoginController.js  
    ├── database
    │   ├── migrations
    │   │   └── 20240711221146-create-table-usuarios.js
    │   │   └── 20240723234214-create-table-locais.js
    │   │   └── 20240724202635-create-table-atividades.js
    │   │   └── 20240724202647-create-table-local_atividades.js          
    │   └── seeds
    │       └── 20240724215754-usuarios.js
    │       └── 20240726205241-atividades.js    
    ├── middlewares
    ├── models
    │   └── Atividade.js
    │   └── Local.js
    │   └── Usuario.js
    │   └── LocalAtividade.js            
    ├── routes
    │   └── atividades.routes.js
    │   └── locals.routes.js    
    │   └── login.routes.js
    │   └── routes.js
    │   └── usuarios.routes.js            
    ├── services
├── index.js
├── server.js
├── .env_example
├── .gitignore
├── .sequelizerc
├── package-lock.json
├── package.json
├── README.md

```

## Pré-requisits

- NodeJS
- PostgreSQL

## Steps to execute

1. Clone the repository.
2. Adjust the environment variables in the .en file.
3. Install the necessary libraries using the command ```npm install```.
4. Execute the command ```npm run start:db``` to create the database, run the seeders and migrations.
5. Generate the swagger documentation with the command ```npm run swagger```.
6. Star the server with ```npm run start:dev```.
7. Acess to [http://localhost:3000/docs/](http://localhost:3000/docs/) to visualize the swagger documentation in the browser.

##### Perform steps 1 to 5 only the first time you run the project.

# Steps to create an image Docker with Docker Desktop and run it (docker-compose.yml)

1. Open Docker Desktop.
2. Open the terminal in the root repository. It could be the VS Code terminal.
3. Run ```docker-compose build``` to build the image using the Docker Compose file.
4. Run ```docker-compose up -d --build``` to constructs the container and installs the containers inside the project.

## Melhorias Futuras

- _Integração com Front-end:_ Fazer integração com o front-end.
- _Projeto:_ Melhorar a organização do projeto e separar bem as responsabilidades.
- _Testes:_ Incluir testes unitários e integrados.

## Contribuições

Contribuições são sempre bem-vindas!

## Autores

- [@TThaz](https://www.github.com/TThaz)
- [@douglascugliarisenai](https://www.github.com/douglascugliarisenai) 
- [@alanamandimifsc](https://www.github.com/alanamandimifsc) 
- [@frankosorio4](https://www.github.com/frankosorio4) 
