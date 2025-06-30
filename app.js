function sortear(){

    let qtdNumeros = parseInt(document.getElementById("quantidade").value);
    let numInicio = parseInt(document.getElementById("de").value);
    let numFim = parseInt(document.getElementById("ate").value);

    numSorteados = [];

    if (numFim > numInicio){

        let soma = numFim - numInicio + 1

        if(qtdNumeros <= soma){

            for(i = 1; i <= qtdNumeros; i++){
        
                let aleatorio = numeroAleatorio(numInicio, numFim)

                while(numSorteados.includes(aleatorio)){

                    aleatorio = numeroAleatorio(numInicio, numFim);

                }

                numSorteados.push(aleatorio);
    
        }
 
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numSorteados} </label>`;
  
            trocaClasse()
        }

        else{
            alert("Quantidade números a serem escolhidos insuficientes, insira dados validos")
            resetarInput()
        }

    }

    else{

        alert("Dados inválidos. Insira novos dados de fim maiores que dados de início")
        resetarInput()

    }

}

function reiniciar(){

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    trocaClasse()
    resetarInput()

}

function numeroAleatorio(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min)

}

function trocaClasse(){
    
    let classeSortear = document.getElementById("btn-reiniciar");

    if(classeSortear.classList.contains("container__botao-desabilitado")){

        classeSortear.classList.replace("container__botao-desabilitado", "container__botao");
    }

    else{

        classeSortear.classList.replace("container__botao", "container__botao-desabilitado");
    }

}

function resetarInput(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}