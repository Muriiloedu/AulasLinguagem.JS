function validarEmail(email) {
  if (!email.includes("@") || !email.includes('.')) {
    return false;
  }
    return true;
}
console.log("validando...");
console.log(validarEmail("ema@valido.com"));
console.log(validarEmail("emailinvalido.com"));