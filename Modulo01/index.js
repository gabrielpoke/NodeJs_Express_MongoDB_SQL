const express = require('express');

const server = express();

//Indica para aplicação que estamos usando o formato Json
server.use(express.json())

const cursos = ['Node Js', 'JavaScript', 'React Native']


//Middleware Global
server.use((req, res, next)=>{

  console.log(`URL CHAMADA: ${req.url}`)

  return next()
})

function checkCurso(req, res, next){

  if(!req.body.name){
    return res.status(400).json({error: "Nome do curso é obrigatorio"})
  }

  return next()
}

function checkIndexCurso(req, res, next){

  const curso = cursos[req.params.index]

  if(!curso){
    return res.status(400).json({error: "Curso não existe"})
  }

  req.curso = curso

  return next() 
}

//Query params = Parametros passados na frente das rotas como por exemplo ?nome=Nodejs

//Route params = Parametros passados diretamente na rota para acessar recursos cursos/2

//Request Body = Quando mandamos um objeto no corpo da requisção {cursos:"Node", tipo : "a"}

//req = Representa dados da nossa requisição

//res = Representa dados e informações da nossa resposta

//Buscando curso especifico via index
server.get('/cursos/:index', checkIndexCurso, (req, res)=>{ 

  return res.json( req.curso )

})

//Listando todos os cursos
server.get('/cursos', (req, res)=>{ return res.json(cursos)})

//Cadastrando novo curso
server.post('/cursos', checkCurso, (req, res)=>{

  const {name} = req.body

  cursos.push(name)

  return res.json(cursos)
})

//Atualizando curso via index
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res)=>{

  const { index } = req.params

  const { name } = req.body

  cursos[index] = name

  return res.json(cursos)
})


//Excluindo curso via index
server.delete('/cursos/:index', checkIndexCurso, (req, res)=>{

  const { index } = req.params

  cursos.splice(index, 1)

  return res.json(cursos)
})

server.listen(3000);