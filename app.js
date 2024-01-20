let numeroSecreto = numeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {

    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha o número entre 1 e 100');

}

mensagemInicial();

function verificarChute() {

    let chute = document.querySelector('input').value;

    let palavraTentativas = tentativa > 1 ? 'tentativas' : 'tentativa';

    let mensagemTentativas = `Você descobriu o númemro secreto com ${tentativa} ${palavraTentativas}`;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {

            exibirTextoNaTela('h1', 'Não foi dessa vez!');
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }
        else {

            exibirTextoNaTela('h1', 'Não dessa vez!');
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativa++;
        limparCampo()
    }
}

function numeroAleatorio() {

    return parseInt(Math.random() * 100 + 1);
}
console.log(numeroSecreto); //teste do numero aleatorio


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {

    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
}