// Solicitar um valor de KM para o usuario
//let quilometros =  Number(prompt("Digite um valor em KM"))
// Converter valor para milhas
// 1 km = 0.621371
// 10 km = 10 * 0.621371
// 50 km = 50 * 0.621371
//let milhas = quilometros * 0.621371
// Exibir o resultado
//alert(`O valor em milhas é ${milhas}`)


//let peso = Number(prompt("Digite o seu peso em kg"))
//let altura = Number(prompt("Digite sua altura em metros"))
//// Calculo do IMC
////let imc = peso / (altura * altura)
//// Outra forma de calcular
//imc = peso / (altura ** 2)
//// Exibir o resultado
//alert(`O seu imc é ${imc}`)
//
//if(imc <= 30){
//alert(`O seu IMC está estável`)
//} else {
//    alert(`Seu IMC não está estável`)
//}    
//


// CRIAR UM CODIGO QUE VERIFIQUE A SITUAÇÂO ELEITORAL DE UMA PESSOA COM A IDADE

//let idade = Number(prompt("Digite sua idade"))
//
//if (idade < 16){
//  alert(`Você não pode votar ainda`)
//}
//else if (idade == 16 || idade == 17  || idade >= 70){
//    alert("Seu voto é opcional")
//}
//  else {
//    alert(`Seu voto é obrigatório`)
//  }
  

//Exercicio de MEDIA

// let nota1 = Number(prompt("Digite a nota da primeira prova"))
// let nota2 = Number(prompt("Digite a nota da segunda prova"))
// let nota3 = Number(prompt("Digite a nota da terceira prova"))

// media = (nota1 + nota2 + nota3) / 3

// if(media >= 7){
//    alert(`Você foi aprovado com média ${media}`)
// }
// else {
//    alert(`Você foi reprovado com média ${media}`)
//  }



// Exercicio 2 calculadora de IMC

let peso = Number(prompt("Digite o seu peso em kg"))
let altura = Number(prompt("Digite sua altura em metros"))
// Calculo do IMC
let imc = peso / (altura * altura)
if(imc < 18){
    alert(`Seu IMC é de ${imc} e está abaixo do peso`)
    } 
    else if(imc <= 30 ){
       alert(`Seu IMC é de ${imc} e está na faixa de peso ideal`)
    }
    else{
        alert(`Seu IMC é de ${imc} e está acima do peso ideal`)
    }    
    

