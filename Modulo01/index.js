const express = require('express');

const server = express();

//req = Representa dados da nossa requisição

//res = Representa dados e informações da nossa resposta
server.get('/cursos', (req, res)=>{ return res.json({"curso":"NodeJs"})})

server.listen(3000);