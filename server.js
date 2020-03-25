





// configuração do servidor
const express =require("express")
const server =express()



server.use(express.static('public'))



server.use(express.urlencoded({extended:true}))



const Pool =require('pg').Pool
const db = new Pool({
    user:'postgres',
    password:'1310',
    host:'localhost',
    port:5432,
    database:'doadores'
})



// configuração do nunjecks
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,

})

//uso do get
server.get("/",function(req, res){
    
    db.query("SELECT * FROM doadores", function(err, result){
        if(err) return rest.send("erro bando de dados.")

        const doadores = result.rows
        return res.render("index.html",{doadores})
    })

})


//uso do post
server.post("/", function (req,res){
    const nome= req.body.nome
    const email= req.body.email
    const sangue= req.body.sangue

    if (nome =="" || email=="" || sangue==""){
        return res.send("Todos os cambos são Obrigatorios")
    }


    const query =
        `insert into "doadores" ("nome","email","sangue")
             VALUES ($1, $2, $3)` 


		db.query(query[nome,email,sangue])

             const VALUES=[nome,email,sangue]

             db.query(query, VALUES, function(err){
                 if(err) return res.send("erro bando de dados.",VALUES)

                 
                 return res.redirect('/')
             } )
          
})


server.listen(3000)




