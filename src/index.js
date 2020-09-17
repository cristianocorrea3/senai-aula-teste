/*--------------CRIAÇÃO DO SERVIDOR LOCAL COM USO DO EXPRESS--------------*/ 
// IMPORTA E ARMAZENA O MODULO EXPRESS EM UMA CONSTANTE
const express = require('express');
// INICIALIZA O OBJETO DO EXPRESS
const app = express();


/*--------------CONFIGURAÇÕES DA APLICAÇÃO--------------*/ 
const port = 3000
app.set('port', process.env.PORT || port)

/*--------------CONFIGURAÇÕES DO MIDDLEWARE--------------*/ 
app.use(express.json())


/*--------------CONFIGURAÇÕES DE ROTAS--------------*/ 
app.use(require('./routes/employees'))


/*--------------INICIALIZAÇÃO DO SERVIDOR--------------*/ 

app.listen(app.get('port'), ()=>{

    console.log('SERVIDOR RODANDO NA PORTA LÓGICA:', app.get('port'))

})

 