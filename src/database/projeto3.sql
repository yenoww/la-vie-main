CREATE DATABASE db_lavie;

USE db_lavie;

CREATE TABLE pacientes (
  paciente_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL,
  idade DATE NOT NULL,
  create_date DATE,
  update_date DATE
);

CREATE TABLE psicologos (
  psicologo_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL,
  apresentacao VARCHAR(400) NOT NULL,
  senha VARCHAR(200) NULL,
  create_date DATE,
  update_date DATE
);

CREATE TABLE atendimentos (
  id_atendimento INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  data_atendimento DATE NOT NULL,
  observacao TEXT NOT NULL,
  create_date DATE,
  update_date DATE,
  id_paciente INTEGER NOT NULL,
  CONSTRAINT atendimento_paciente FOREIGN KEY 
            (id_paciente) REFERENCES pacientes(paciente_id),
  id_psicologo INTEGER NOT NULL,
  CONSTRAINT atendimento_psicologo FOREIGN KEY
            (id_psicologo) REFERENCES psicologos(psicologo_id)
);