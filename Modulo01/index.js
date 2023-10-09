const express = require('express');

const server = express();


//Query params = Parametros passados na frente das rotas como por exemplo ?nome=Nodejs

//Route params = Parametros passados diretamente na rota para acessar recursos cursos/2

//Request Body = Quando mandamos um objeto no corpo da requisção {cursos:"Node", tipo : "a"}

//req = Representa dados da nossa requisição

//res = Representa dados e informações da nossa resposta
server.get('/cursos/:id', (req, res)=>{ 

  const id = req.params.id;

  return res.json({"curso": `Aprendendo ${id}`})

})

server.listen(3000);