const express = require('express');

const server = express();

const cursos = ['Node Js', 'JavaScript1', 'React Native']

//Query params = Parametros passados na frente das rotas como por exemplo ?nome=Nodejs

//Route params = Parametros passados diretamente na rota para acessar recursos cursos/2

//Request Body = Quando mandamos um objeto no corpo da requisção {cursos:"Node", tipo : "a"}

//req = Representa dados da nossa requisição

//res = Representa dados e informações da nossa resposta
server.get('/cursos/:index', (req, res)=>{ 

  const { index } = req.params;

  return res.json( cursos[index] )

})

server.listen(3000);