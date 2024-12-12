const dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "admin",
  DB: "momento",
  PORT: "3306",
  dialect: "mysql",
  secret: "auth-mid",
  pool: {
    max: 150,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = dbConfig;
