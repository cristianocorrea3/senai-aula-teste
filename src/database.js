// IMPORTA E ARMAZENA O MODULO DO MYSQL
const mysql = require('mysql')

//COFIGURA O OBJETO DE CONEXÃO PARA O MYSQL
const mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'company'

})

//ABRE A CONEXÃO COM O MYSQL 
mysqlConnection.connect( (err)=>{

    //TRATA ERROS DE CONEXÃO EXIBE UMA MENSAGEM INSFORMA QUE HOUVE SUCESSO
    if(err){

        console.log(err)
        return;

    }else{

        console.log('CONEXÃO AO BANCO DE DADO EFETUADA COM SUCESSO!')
        
    }

})

module.exports = mysqlConnection 