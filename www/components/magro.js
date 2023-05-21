// This is a JavaScript file

const jogador = [Luis]
const equipe = [Vasco]

function cadastrar() {
    // jogador = document.getElementById('jogador').value
    // equipe = document.getElementById('equipe').value

    localStorage.setItem('jogadores', JSON.stringify(jogador))
    localStorage.setItem('equipes', JSON.stringify(equipe))

}

function listar(){

    const jogadores = JSON.parse(localStorage.getItem('jogadores'))
    const equipes = JSON.parse(localStorage.getItem('equipes'))

    for(let i = 0; i < jogadores.length; i++){

    document.getElementById('lista').innerHTML = jogadores[i] + " - " + equipes[i]

    }
}