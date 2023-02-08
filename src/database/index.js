const Sequelize = require("sequelize");

const DB_NAME = "db_lavie";
const DB_USER = "root";
const DB_PASS = "banco123";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

//Objeto para guardar a conexão do banco de dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar se conectar com o banco de dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectato!");
  } catch (error) {
    console.error("Erro ao tentar se conectar com o banco de dados");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
