// IMPORTA E ARMAZENA O MODULO EXPRESS EM UMA CONSTANTE
const express = require('express')

//IMPORTA A CONEXÃO COM O BASE DE DADOS
const mysqlConnection = require('../database')

//CONFIGURA UM OBJETO PARA MANIPULAÇÃO DAS ROTAS PELO EXPRESS
const router = express.Router()

/*--------------CONFIGURAÇÕES DAS ROTAS--------------*/ 
//ROTA DE LISTAGEM GERAL DE DADOS - VERBO HTTP GET
router.get('/', (req, res)=>{

    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields)=>{

        if(!err){

            res.json(rows);

        }else{

            res.json({status : 'Erro ao selecionar os dados!'})

        }

    })

})

//ROTA DE LISTAGEM DE DADOS POR ID - VERBO HTTP GET
router.get('/:id', (req, res)=>{

    //RECUPERA O ID ENVIADO PELA REQUISIÇÃO COM O USO DO CONCEITO DE DESTRUCT DO ES6
    const { id } = req.params
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields)=>{

        if(!err){

            res.json(rows);

        }else{

            res.json({status : 'Erro ao selecionar os dados!'})

        }

    })
    
})

//ROTA PARA INSERÇAO DE DADOS - VERBO HTTP POST
router.post('/', (req, res)=>{

    const { name, salary } = req.body

    const query = `

        CALL insertEmployees(?, ?);

    `

    mysqlConnection.query(query, [name, salary], (err, rows, fields)=>{

        if(!err){

            res.json({status : 'Dados cadastrados com sucesso! '})

        }else{

            res.json({status : 'Erro ao inserir os dados!'})

        }

    })

})

//ROTA PARA ATUALIZAÇÃO DE DADOS - VERBO HTTP PUT
router.put('/:id', (req, res)=>{

    const { name, salary } = req.body
    const { id } = req.params

    const query = `

        CALL updateEmployees(?, ?, ?);

    `

    mysqlConnection.query(query, [id, name, salary], (err, rows, fields)=>{

        if(!err){

            res.json({status : 'Dados alterados com sucesso! '})

        }else{

            res.json({status : 'Erro ao alterar os dados! '})

        }

    })

})


//ROTA PARA EXCLUSÃO DE DADOS - VERBO HTTP PUT
router.delete('/:id', (req, res)=>{

    const { id } = req.params

    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields)=>{

        if(!err){

            res.json({status : 'Dados exluidos com sucesso! '})

        }else{

            res.json({status : 'Erro ao excluir os dados! '})

        }

    })

})

//EXPORTA O ARQUIVO DE ROTAS
module.exports = router  