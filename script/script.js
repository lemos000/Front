window.addEventListener('DOMContentLoaded', function() {
    const words = ["você", "o oceano", "o mundo"];
    const colors = ["#0077be", "#00a3cc", "#00c2e0"];
    const delayBetweenWords = 2000; 
    const typingSpeed = 150; 
    const erasingSpeed = 100; 
    const secTextoElement = document.querySelector('.sec-texto');
    const cpfInput = document.getElementById('cpf');

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


document.addEventListener('DOMContentLoaded', (event) => {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');

    cpfInput.addEventListener('input', function (e) {
        let value = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (value.length > 11) {
            value = value.slice(0, 11); // Limita o valor a 11 dígitos
        }

        // Aplica a máscara de CPF
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

        cpfInput.value = value;
    });

    telefoneInput.addEventListener('input', function (e) {
        let value = telefoneInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (value.length > 11) {
            value = value.slice(0, 11); // Limita o valor a 11 dígitos
        }

        // Aplica a máscara de telefone
        value = value.replace(/^(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');

        telefoneInput.value = value;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const items = [
        { selector: '.item1', url: 'https://www.minasbioconsultoria.com/post/as-consequ%C3%AAncias-causadas-por-vazamento-de-petr%C3%B3leo-nos-oceanos' },
        { selector: '.item2', url: 'https://www.theinertia.com/surf/zak-noyle-tells-the-story-of-his-most-memorable-photo-wave-of-change/' },
        { selector: '.item3', url: 'https://tamar.org.br/interna.php?cod=315' },
        { selector: '.item4', url: 'https://noticias.uol.com.br/ultimas-noticias/rfi/2023/06/19/onu-adota-tratado-historico-para-protecao-dos-oceanos-apos-15-anos-de-discussoes.htm' },
        { selector: '.item5', url: 'https://www.tamar.org.br/' }
    ];

    items.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.addEventListener('click', function () {
                window.location.href = item.url;
            });
        }
    })
});