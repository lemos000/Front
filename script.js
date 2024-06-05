const text = document.querySelector(".sec-texto");
const palavras = ["você,", "o oceano,", "o mundo."];
const cores = ["#f41e9b", "#FF5733", "#22b5f4"];

palavras.forEach((palavra, index) => {
    const span = document.createElement("span");
    span.textContent = palavra + " ";
    span.style.color = cores[index];
    text.innerHTML += span.outerHTML;
});