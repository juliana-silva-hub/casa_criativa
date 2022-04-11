// Falar sobre coisas básicas da Programação em JavaScript

// Variáveis
//const mensagem = "Oi, como vai?" //string
//const number = 2.5  //number

//console.log(mensagem)
//console.log(number)



//objeto
const xicara = {
    cor: "white",
    tamanho: 10,
    estaSujo(simNao) {
        console.log(simNao)
    }

}

xicara.estaSujo("sim")

const cor = "preto"
const tamanho = 5
function sujo (esta) {
    console.log(esta)

}
const xicara2 = {
    cor,
    tamanho,
    sujo
}
