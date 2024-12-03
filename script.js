window.onload = function() {
    // Parte do movimento da lua (Eclipse)
    let lua = document.querySelector('.lua');
    let moveCount = 0;

    function moverLua() {
        if (moveCount < 200) {
            moveCount++;
            lua.style.transform = `translateX(${moveCount - 218}px)`; // Movimento gradual
        } else {
            clearInterval(movementInterval); // Parar o movimento quando se encontram
        }
    }

    const movementInterval = setInterval(moverLua, 30); // A cada 30ms o movimento avança

    // Parte do slider de imagens
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    function changeImage() {
        // Remove a classe 'on' da imagem atual
        images[currentIndex].classList.remove('on');
        images[currentIndex].classList.add('off');

        // Avança para a próxima imagem (circular)
        currentIndex = (currentIndex + 1) % images.length;

        // Adiciona a classe 'on' à nova imagem
        images[currentIndex].classList.remove('off');
        images[currentIndex].classList.add('on');
    }

    // Muda a imagem a cada 2 segundos
    setInterval(changeImage, 2000);
};
