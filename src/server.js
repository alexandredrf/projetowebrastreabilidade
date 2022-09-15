const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")  //enderaço de onde está nosso banco de dados


//Configurar pasta píblica
server.use(express.static("public"))

//HABILITAR O USO DO REQ BODY NA NOSSA APLICAÇÃO

server.use(express.urlencoded({ extended:true }))

//Utilizando TEMPLATE ENGINE  Transforma html acessível para funções. NUNJUCKS

const nunjucks = require("nunjucks") // 1:00:00 do vídeo  // pedindo um módulo , uma dependência
nunjucks.configure("src/views",{  //1º Local onde ta os htmls

    express: server,   // ligação do nunjucks com o server
    noCache: true
})


// Configurar camonhos para a minha aplicação
//Página incial
//req: Requisição (Pergunta)
//res: Resposta


// ROTAS
server.get("/",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

   return res.render("index.html",{title:"Um Título"})   //variáveis utilizando render
})


server.get("/create-point",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

    //req.query: query strings da nossa URL  ----> Pega os dados informados pelo cadastro realizado na página
    //console.log(req.query) //---> Pega os dados através do GET

    return res.render("create-point.html")
})

server.post("/savepoint", (req , res) => {

    
    //req.body: O corpo do nosso formulário
    //console.log(req.body)       //precisa ativar com server.use(express.urlencoded({ extended:true }))


    //inserir dados no banco de dados:

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

            const values = [
                req.body.image,
                req.body.name,
                req.body.address,
                req.body.address2,
                req.body.state,
                req.body.city,
                req.body.items
         ]

         function afterInsertData(err){         //função de retorno
            if (err) {
                console.log(err)
                return res.render("create-point.html", {erro : true})
            }

            console.log("Cadastrado com sucesso!")
            //console.log(this)
            return res.render("create-point.html", {saved : true})

               }

        db.run( query, values, afterInsertData)  // função entra como parâmetro

    
    

})


server.get("/search-results",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

    const search = req.query.search
    if(search == ""){//pesquisa vazia
                return res.render("search-results.html", { total : 0}) 
    }
    
        

    //PEGAR OS DADOS DO BANCO DE DADOS

db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows){      //OS DADOS FICAM DENTRO DE ROWS
            
            if (err) {
                return console.log(err)
            }

            const total = rows.length

            console.log("Aqui estão seus registros")
            console.log(rows.length)
           // console.log(rows)



            //mostrar a página html com os dados do banco de dados
            return res.render("search-results.html", { places: rows, total : total})  

        })



      //trocar sendfiles por render
})
//FIM DE ROTAS



// ligar o servidor
server.listen(3000) //fica ouvindo na porta 3000 