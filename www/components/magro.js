var jogadorNome
var equipeNome
const jogador = []
const equipe = []

function cadastrar() {
    jogadorNome = document.getElementById('jogador').value
    equipeNome = document.getElementById('equipe').value

    jogador.push(jogadorNome)
    equipe.push(equipeNome)

    localStorage.setItem('jogador', JSON.stringify(jogador))
    localStorage.setItem('equipe', JSON.stringify(equipe))

}

function listar(){

    var jogador = JSON.parse(localStorage.getItem('jogador'))
    var equipe = JSON.parse(localStorage.getItem('equipe'))

    for(let i = 0; i < jogador.length; i++){
    document.getElementById('lista').innerHTML = jogador[i] + " - " + equipe[i] + "<br>"
    }
}