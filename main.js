document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.news-banner-one', { delay: 500 });
ScrollReveal().reveal('.news-banner-two', { delay: 500 });

//el primer querySelector es para seleccionar la clase que realizara la funcion y el segundo querySelector es para señanalar la clase que se modificara.
//el addEvenListener es para definir como iniciaremos la funcion, por ejemplo con un click.

//ponemos las clases en orden para que pueda funcionar la instruccion.
