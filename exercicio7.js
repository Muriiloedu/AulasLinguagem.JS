// let frase = window.prompt("Digite uma frase: ");
// let fraseInvertida = "";

function inverterFrase(frase) {
    let fraseInvertida = "";
    for (let i = frase.length - 1; i >= 0; i--) {
      fraseInvertida += frase[i];
    }
    return fraseInvertida;
  }
  
  let frase = "Esta é a frase que será invertida.";
  
  let fraseInvertida = inverterFrase(frase);
  console.log("Frase original: " + frase);
  console.log("Frase invertida: " + fraseInvertida);