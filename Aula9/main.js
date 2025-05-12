
document.querySelector("#btn1").addEventListener('click', Button1);
document.querySelector("#btn2").addEventListener('click', Button2);
document.querySelector("#btn3").addEventListener('click', Button3);
document.querySelector("#btn4").addEventListener('click', Button1);
document.querySelector("#btn5").addEventListener('click', Button1);
document.querySelector("#btn6").addEventListener('click', Button1);

const buttons = document.querySelectorAll("button");

function Button1() {
    for (let btn of buttons) {
            btn.addEventListener('click', function() {
                document.querySelector("h1").classList.add("ativo");
            })
        }
    
}

function Button2() {

    const img = document.querySelector("img");
    img.src = "Imagens/cat.png";

    document.querySelector("h1").classList.remove("ativo");
}

function Button3() {
    const paragrafo = document.querySelector("h2");
    document.querySelector("h2").classList.add("alterar");
    paragrafo.innerHTML = "ALTERADO!";
    
}

for (let btn of buttons) {
    btn.addEventListener('click', function() {
        document.querySelector("#p").innerHTML = btn.innerHTML;
    })
}
