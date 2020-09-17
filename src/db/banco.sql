#CRIA A BASE DE DADOS
CREATE DATABASE company;

#HABILITA A BASE DE DADOS
USE company;

#CRIA UMA TABELA NA BASE DE DADOS
CREATE TABLE employees(
id int(10) unsigned auto_increment primary key,
name varchar(500) not null,
salary decimal(10, 2) not null
);

#INSERÇÕES INICIAIS DE DADOS - USADAS PARA OS TESTE INICIAIS DE CONSUMO DE DADOS PELA API
INSERT INTO employees (name, salary) 
values ('Ana Maria', 5000);

INSERT INTO employees (name, salary) 
values ('João da Silva', 4800);

INSERT INTO employees (name, salary) 
values ('Joana Prado', 6000);

#STOREDPROCEDURE PARA A INSERÇÃO DE DADOS
DELIMITER $
CREATE PROCEDURE insertEmployees(

	IN _name VARCHAR(500),
    IN _salary decimal(10, 2)

)

BEGIN
	
	INSERT INTO employees (name, salary) VALUES (_name, _salary);

END $

#STOREDPROCEDURE PARA A ATUALIZAÇÃO DE DADOS
DELIMITER $
CREATE PROCEDURE updateEmployees(

	IN _id INT(10),
	IN _name VARCHAR(500),
    IN _salary decimal(10, 2)

)

BEGIN
	
	UPDATE employees SET name = _name, salary = _salary WHERE id = _id;

END $





