window.addEventListener('load', function() {
    const words = ["você", "o oceano", "o mundo"];
    const colors = ["#0077be", "#00a3cc", "#00c2e0"];
    const delayBetweenWords = 2000; 
    const typingSpeed = 150; 
    const erasingSpeed = 100; 
    const secTextoElement = document.querySelector('.sec-texto');

    let index = 0;
    let isErasing = false;
    let wordIndex = 0;

    function typeWriter() {
        const currentWord = words[wordIndex];
        const currentColor = colors[wordIndex];
        const currentText = secTextoElement.textContent;

        if (!isErasing) {
            if (index < currentWord.length) {
                secTextoElement.textContent += currentWord.charAt(index);
                secTextoElement.style.color = currentColor; 
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                isErasing = true;
                setTimeout(typeWriter, delayBetweenWords);
            }
        } else {
            if (index > 0) {
                secTextoElement.textContent = currentText.slice(0, -1);
                index--;
                setTimeout(typeWriter, erasingSpeed);
            } else {
                isErasing = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }


    secTextoElement.textContent = '';
    typeWriter();
});

