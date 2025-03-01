// 1 - R;
// let A = "Murilo";
// let B = "Lima";
// let nome = function(A, B){
//     return A + B;
// }
// console.log(nome(A + " " + B + "."));

// 2 - R;
// let Base = 7;
// let Altura = 9;

// let area = (Base, Altura) => Base * Altura;

// console.log(area(Base, Altura));

// 3 - R;
// const numeros = [10, 20, 30, 40, 50];
// let soma = 0;
// for(let i = 0; i < numeros.length; i++){
//     soma += numeros[i];
// }
// console.log(soma);

// 4 - R;
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let impares = function(numeros){
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] % 2 != 0){
//             console.log(numeros[i]);
//         }
//     }

//     //ou

//     for (let num of numeros){
//         if(num % 2 != 0){
//             console.log(num);        //Não sei se está certo =)
//         }
//     }
// }
// console.log(impares(numeros));

// 5 - R;
// const cidade = ["Sorocaba", "Votorantim", "Piedade"];

// cidade.unshift("Bauru");
// cidade.pop();

// console.log(cidade);

// 6 - R;
// var Aluno = {
//     nome :"Murilo Lima",
//     idade : 19,
//     curso : "ADS",
//     semestre : 3,
//     matricula : 247853
// }
// console.log(Aluno);

// 7 - R;
// const MaiorNumero  = [11, 27, 9, 4, 21];
// let maior = 0;
// for(let i = 0; i < MaiorNumero.length; i++){
//     if(MaiorNumero[i] > maior){
//         maior = MaiorNumero[i];
//     }
// }
// console.log(maior);

// 8 - R;
// let Produto = {
//     nome : "Remedio Anti-Calvice",
//     preco : 15,
//     quantidade : 10
// }
//  function calcularTotal(Produto){
//     let total = Produto.preco * Produto.quantidade;
//     console.log(total);
// }                                               //undefined =(, não sei o por que?
// console.log(calcularTotal(Produto));

// 9 - R;
// let Endereço = {
//     rua : "Rua dos Santistas",
//     numero : 10,
//     bairro : "Jardim dos maiores",
//     cidade : "Santos",
//     estado : "SP",
//     cep : 14000011
// }
//     for(let local in Endereço){
//         console.log(local + ": " + Endereço[local]);
//     }

// 10 - R;
// let Alunos = [
//     {
//         nome : "Murilo",
//         idade : 19
//     },
//     {
//         nome : "Gustavo",
//         idade : 19
//     },
//     {
//         nome : "ALexandre",
//         idade : 20
//     },
//     {
//         nome : "Lucas",
//         idade : 16
//     }
// ]

// let AlunosMaiores = function(Alunos){
//     for(let i = 0; i < Alunos.length; i++){
//         if(Alunos[i].idade >= 18){
//             console.log(Alunos[i].nome+ " é maior de idade");
//         }else{
//             console.log(Alunos[i].nome+ " é menor de idade");
//         }
//     }
// }

// console.log(AlunosMaiores(Alunos));

////ou

// for(let i = 0; i < Alunos.length; i++){
//     console.log(Alunos[i]);
//     if(Alunos[i].idade >= 18){
//         console.log(Alunos[i].nome);
//     }else{
//         console.log("Menor de Idade");
//     }
// }
// console.log("Alunos Maiores de Idade: "+ Alunos[0].nome + " ," + Alunos[1].nome +' e ' + Alunos[2].nome); //Não sei se está certo =)