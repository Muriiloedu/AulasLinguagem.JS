const ContaBancaria = require('./ContaBancaria');

const conta = new ContaBancaria(100);

conta.sacar(50);

conta.depositar(20);

console.log("Saldo: "+ conta._saldo);


