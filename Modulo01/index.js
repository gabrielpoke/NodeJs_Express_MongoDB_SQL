const express = require('express');

const server = express();

//Indica para aplicação que estamos usando o formato Json
server.use(express.json())

const cursos = ['Node Js', 'JavaScript', 'React Native']

//Query params = Parametros passados na frente das rotas como por exemplo ?nome=Nodejs

//Route params = Parametros passados diretamente na rota para acessar recursos cursos/2

//Request Body = Quando mandamos um objeto no corpo da requisção {cursos:"Node", tipo : "a"}

//req = Representa dados da nossa requisição

//res = Representa dados e informações da nossa resposta

//Buscando curso especifico via index
server.get('/cursos/:index', (req, res)=>{ 

  const { index } = req.params;

  return res.json( cursos[index] )

})

//Listando todos os cursos
server.get('/cursos', (req, res)=>{ return res.json(cursos)})

//Cadastrando novo curso
server.post('/cursos', (req, res)=>{

  const {name} = req.body

  cursos.push(name)

  return res.json(cursos)
})

//Atualizando curso via index
server.put('/cursos/:index', (req, res)=>{

  const { index } = req.params

  const { name } = req.body

  cursos[index] = name

  return res.json(cursos)
})


//Excluindo curso via index
server.delete('/cursos/:index', (req, res)=>{

  const { index } = req.params

  cursos.splice(index, 1)

  return res.json(cursos)
})

server.listen(3000);