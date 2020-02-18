// configuração do servidor
const express =require("express")
const server =express()

// configurar servidor para apresentar arquivos static
server.use(express.static('public'))

// configuração do nunjecks
const nunjucks =require("nunjucks")
nunjucks.configure("./",{
    express: server

})

server.get("/",function(req, res){
    return res.render("index.html")
})

server.listen(3000)