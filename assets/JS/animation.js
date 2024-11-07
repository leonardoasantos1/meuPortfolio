document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll('.animate-on-scroll');

    function checarVisibilidade() {
        const disparar = window.innerHeight / 5 * 4; 
        elementos.forEach(elemento => {
            const caixa = elemento.getBoundingClientRect();
            if (caixa.top < disparar) {
                elemento.classList.add('visible');
            } else {
                elemento.classList.remove('visible'); 
            }
        });
    }

    window.addEventListener('scroll', checarVisibilidade);
    checarVisibilidade(); 
});