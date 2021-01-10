/**
 * Desenvolvido e mantido por Miguel Riquelme e João Nascimento
 * 
 * Linkedin: miguelrisquelme ou Miguel Riquelme
 * Github: miguelrisquelme
 * 
 * GitHub: JoaoN-Oliveira41
 * 
 * Aperte CTRL + F para procurar pela palavra chave da função desejada
 * 
 * 
 * Tópicos
 * 1. Funções de cálculo
 * 2. Funções de verificação
 * 3. Funções de conversão
 * 
 * 
 */




// Funções de calculo

// 1.
exports.calcularSoma = function(numero1, numero2){
    return numero1 + numero2;
}

// 2.
exports.calcularSubtracao = function(numero1, numero2) {
    return numero1 - numero2;
}

// 3.
exports.calcularMultiplicacao = function(numero1, numero2) {
    return numero1 * numero2;
}

// 4.
exports.calcularDivisao = function(numero1, numero2) {
    return numero1 * numero2;
}

// 5.
exports.calcularAreaQuadrado = function(lado1) {
    return lado1 * lado1;
}

// 6.
exports.calcularAreaRetangulo = function(lado1, lado2) {
    return lado1 * lado2;
}

// 7.
exports.calcularAreaParalelogramo = function(base, altura){
    return base * altura;
}

// 8.
exports.calcularAreaTrianguloRetangulo = function(base, altura) {
    return (base * altura) / 2;
}

// 9.
exports.calcularAreaTrianguloEquilatero = function(lado){
    return ((Math.sqrt(3) / 4) * (lado * lado));
}

// 10.
exports.calcularAreaTrianguloIsosceles = function(base, altura){
    return (base * altura) / 2;
}

// 11.
exports.calcularAreaTrianguloEscaleno = function(lado1, lado2, lado3){
    return (1/2 * lado2 * lado3 * Math.sin(lado1));
}

// 12.
exports.calcularAreaLosango = function(diagonalMaior, diagonalMenor){
    return (diagonalMaior * diagonalMenor) / 2;
}

// 13.
exports.calcularAreaTrapezio = function(baseMaior, baseMenor, altura){
    return ((baseMaior + baseMenor) * altura) / 2;
}

// 14.
exports.calcularAreaCirculo = function(raio) {
    return (3.14159 * (raio * raio));
}

// 15.
exports.calcularRaizQuadrada = function(numero){
    return Math.pow(numero, 1/2);
}

// 16.
exports.calcularTermoGeralProgressãoAritmética = function(termoGeralDesejado, primeiroTermoDaProgressao, razao){
    var resposta = primeiroTermoDaProgressao + (termoGeralDesejado - 1) * razao;
    return resposta;
}

// 17.
exports.calcularBaskhara = function(numeroA, numeroB, numeroC){
    let r = (numeroB * numeroB) - 4 * numeroA * numeroC;
    let dA = 1, dB = 0;
    for (var  i = 0; i < r; i++) {
        dB = r / dA;
        dA = (dB + dA) / 2;
    }
    let respostaX1 = -numeroB + dA / 2 * numeroA;
    let respostaX2 = -numeroB - dB / 2 *numeroA;
    return respostaX1, respostaX2;

}

// 18.
exports.calcularVelocidadeEmFisicaCinematica = function(tempo, distancia){
    let resposta = distancia / tempo;
    return resposta;
}

// 19.
exports.calcularTempoEmFisicaCinematica = function(velocidade, distancia){
    let resposta = distancia / velocidade;
    return resposta;
}

// 20.
exports.calcularDistanciaEmFisicaCinematica = function(velocidade, tempo){
    let resposta = velocidade * tempo;
    return resposta;
}


// Funções de verificação

// 1.
exports.verificarNumeroPar = function(numero) {
    var resposta = false;
    if(numero % 2 == 0){
        resposta = true;
        return resposta;
    } else {
        return resposta;
    }
}

// 2.
exports.verificarNumeroImpar = function(numero) {
    var resposta = true;
    if(numero % 2 == 0){
        resposta = false;
        return resposta;
    } else {
        return resposta;
    }
}

// 3.
exports.verificarNumeroPrimo = function(numero){
    for (let i = 1; i <= 9; i++) {
        let resposta = numero % 2;
        if(resposta == 0){
            j++;
        }if(j==2){
            return true;
        }else{
            return false;
        }
        
    }
}


// Funções de conversão

// 1. 
exports.converterQuilometroParaMetro = function(valorEmQuilometro){
    return valorEmQuilometro * 1000;
}

// 2.
exports.converterQuilometroParaCentimetro = function(valorEmQuilometro){
    return valorEmQuilometro * 100000;
}

// 3.
exports.converterMetroParaQuilometro = function(valorEmMetro){
    return valorEmMetro / 1000;
}

// 4.
exports.converterMetroParaCentimetro = function(valorEmMetro){
    return valorEmMetro * 100;
}

// 5.
exports.converterCentimetroParaQuilometro = function(valorEmCentimetro){
    return valorEmCentimetro / 100000;
}

// 6.
exports.converterCentimetroParaMetro = function(valorEmCentimetro){
    return valorEmCentimetro / 100;
}

// 7.
exports.converterMetrosPorSegundosParaQuilometrosPorHora = function(valorEmMetrosPorSegundo){
    return valorEmMetrosPorSegundo * 3.6;
}

// 8.
exports.converterQuilometrosPorHoraParaMetrosPorSegundo = function(valorEmQuilometrosPorHora){
    return valorEmQuilometrosPorHora / 3.6;
}

// 9.
exports.converterLitroParaMililitro = function(valorEmLitro){
    return valorEmLitro * 1000;
}

// 10.
exports.converterMililitroParaLitro = function(valorEmMililitro){
    return valorEmMililitro / 1000;
}
