





// configuração do servidor
const express =require("express")
const server =express()









// configurar servidor para apresentar arquivos static
server.use(express.static('public'))

server.use(express.urlencoded({extended:true}))

// configuração do nunjecks
const nunjucks =require("nunjucks")
nunjucks.configure("./",{
    express: server,
    noCache:true,

})

const doadores = [
    {
        nome: "Guilherme peireira",
        sangue: "AB+"


    },
    {
        nome: "guilherme santanna",
        sangue: "AB+"


    },
    {
        nome: "guilherme santanna",
        sangue: "AB+"


    },
    {
        nome: "guilherme santanna",
        sangue: "AB+"


    },


]

// uso de get 
server.get("/",function(req, res){
    return res.render("index.html",{doadores})
})

//uso do post
server.post("/", function (req,res){
    const nome= req.body.nome
    const email= req.body.email
    const sangue= req.body.sangue


//adc pra dentro do arrey
    doadores.push({
        nome:nome,
        sangue,sangue
    })
    console.log(doadores)
    return  res.redirect("/")

    

})

server.listen(3000)




