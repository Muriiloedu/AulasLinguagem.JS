function ContarVogal(frase) {
    let contarVogal = 0;
    for (let i = 0; i < frase.length; i++) {
        let frase =  "";
        if (frase == "a" || frase == "e" || frase == "i" || frase == "o" || frase == "u") {
        contarVogal++;
        }
    }
    return contarVogal;
  }
  let frase = "Esta é a frase que será contada as vogais.";
    let QuantidadeVogal = ContarVogal(frase);
    console.log("Frase: " + frase);
    console.log("Quantidade de vogais: " + QuantidadeVogal);    