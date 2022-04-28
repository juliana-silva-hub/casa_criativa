// usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()


const ideas = [
    {
        img: "/img/worker.png",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quia voluptatem",
        url: "https://rocketseat.com.br"
    },

    {
        img: "/img/treino.png",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quia voluptatem",
        url: "https://www.queimadiaria.com/"
    },
    
    {
        img: "/img/meditacao.png",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quia voluptatem",
        url: "https://prileiteyoga.com.br/yoga-co/"
    },

    {
        img: "/img/karaoke.png",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quia voluptatem",
        url: "https://www.singsnap.com/"
    },

]


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
server.get("/", function(req, res) {
    return res.render("/index.html")
})

server.get("/ideias", function(req, res) {
    return res.render("/ideias.html")
})

// liguei meu servidor na porta 3000
server.listen(3000)