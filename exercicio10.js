
function ePalindromo(frase) {
    const fraseLimpa = frase.toLowerCase().replace(/ /g, "");
    const fraseInvertida = fraseLimpa.split("").reverse().join("");
    return fraseLimpa === fraseInvertida;
  }
  
  // Exemplos de uso da função ehPalindromo:
  console.log("arara:", ePalindromo("arara")); // true
  console.log("A mala nada na lama:", ePalindromo("A mala nada na lama")); // true
  console.log("roma:", ePalindromo("roma")); // false