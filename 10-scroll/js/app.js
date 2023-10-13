window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamanioDePantalla = window.innerHeight/3;

    if(posicionObj1 < tamanioDePantalla) {
        animacion.style.animation = 'mover 1s ease-out'
    }
})