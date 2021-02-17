### O-Chess

#### Why
The main idea is to study and make free chess software available to practice and improve development skills.
---

#### About

- [Docker] as the container service to isolate the environment.
- [Node.js](Long-Term-Support Version) as the run-time environment to run JavaScript.
- [Express.js]as the server framework / controller layer
- [Postgre SQL]as the database layer
- [TypeORM] as the "ORM" / model layer

#### Features

Soon

---

### Getting Started

#### Docker
- Clone the repository
- Run `docker-compose up`

#### Without Docker
- Clone the repository
- Run `yarn`
- Run `yarn start`

\* You need to set environment variables to provide configuration for database connection. Please see `.env.sample` and create your .env file just like the .env.sample information with your development settings.

---

After the server is setup, you will be provided with an API Key on the terminal.
The API will be useable from the documentation available at http://localhost:3000/docs.

---
