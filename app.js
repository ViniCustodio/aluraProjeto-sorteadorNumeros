function sortear(){
    let qtdNumeros = parseInt(document.getElementById("quantidade").value);
    let numInicio = parseInt(document.getElementById("de").value);
    let numFim = parseInt(document.getElementById("ate").value);

    numSorteados = []

    for(i = 1; i <= qtdNumeros; i++){

        let aleatorio = numeroAleatorio(numInicio, numFim)
        numSorteados.push(aleatorio);
    }

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `Números sorteados: ${numSorteados}`

}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}