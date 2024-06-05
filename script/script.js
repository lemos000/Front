window.addEventListener('scroll', function() {
    const painel = document.getElementById('painel');
    if (window.scrollY > 200) { 
        painel.classList.add('show');
    } else {
        painel.classList.remove('show');
    }
});

const text = document.querySelector(".sec-texto");
const palavras = [" você,", " o oceano,", " o mundo."];
const cores = ["#f41e9b", "#FF5733", "#22b5f4"];
let wordIndex = 0;
let letterIndex = 0;
let delay = 100; 

const type = () => {
    if (wordIndex < palavras.length) {
        const word = palavras[wordIndex];
        const cor = cores[wordIndex]; 
        text.textContent = word.substring(0, letterIndex + 1);
        text.style.color = cor;
        letterIndex++;
        if (letterIndex <= word.length) {
            setTimeout(type, delay);
        } else {
            wordIndex++;
            letterIndex = 0;
            delay = 100;
            setTimeout(type, 2000); 
        }
    } else {
        wordIndex = 0;
        setTimeout(type, 2000);
    }
};

type();

