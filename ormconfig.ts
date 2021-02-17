export = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  logging: false,
  entities: [
    "./src/models/*.ts",
  ],
  migrations: [
    "./src/database/migrations/*.ts"
  ],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
