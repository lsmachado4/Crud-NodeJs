const express = require('express')
const server = express()
server.use(express.json())
const cursos = [ "Curso FullStack", "Curso de Flutter", "Curso de Express"]

//Retorna uma posição/index do array 
server.get("/cursos/:index", (req,res)=>{
    
    const {index} = req.params
    
    return res.json(cursos[index])
})

// Listar/retorna todas os arrays 
server.get("/cursos",(req,res)=>{
    
    return res.json(cursos)

})

// Criar elementos do array 

server.post("/cursos",(req,res)=>{
    const {name} = req.body
    
    cursos.push(name)
    
    return res.json(cursos)
})
// ATUALIZA elementos da array

server.put("/cursos/:index", (req,res)=>{
    const { index } = req.params
    
    const {name} = req.body
    
    cursos[index] = name
    
    return res.json(cursos)
})


//DELETANDO elementos ARRAY

server.delete("/cursos/:index",(req,res)=>{
    const {index} = req.params
    
    cursos.splice(index,1)
    
    return res.json({message:"O elemento foi deletado!"})
     
})














server.listen(3333)







//referência: https://www.youtube.com/watch?v=hgFQgtsYG30&t=1133s&ab_channel=DankiCode