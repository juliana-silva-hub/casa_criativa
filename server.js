// usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()

const db = require("./db")

//const ideas = [
//    {
//        
//    },
//
//    {
//       img: "/img/treino.png",
//        title: "Exercícios",
//       category: "Saúde",
//       description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quia voluptatem",
//        url: "https://www.queimadiaria.com/"
//    },
//   
//   {
//       img: "/img/meditacao.png",
//       title: "Meditação",
//       category: "Mentalidade",
//      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quia voluptatem",
//       url: "https://prileiteyoga.com.br/yoga-co/"
//   },

//   {
//       img: "/img/karaoke.png",
//       title: "Karaokê",
//       category: "Diversão em família",
//       description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quia voluptatem",
//       url: "https://www.singsnap.com/"
//   },
//
//]


// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //boolean
})

// criei uma rota/
// e capturo o pedido do cliente para responder
server.get("/", function (req, res) {

    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err) return console.log(err)

        const reversedIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reversedIdeas) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
            }
        }

        return res.render("../views/index.html", {
            ideas: lastIdeas
        })
    })


})

server.get("/ideias", function (req, res) {

    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err) return console.log(err)

        const reversedIdeas = [...rows].reverse()
        return res.render("../views/ideias.html", { ideas: reversedIdeas() })

    })    
})


// liguei meu servi]dor na porta 3000
server.listen(3000)