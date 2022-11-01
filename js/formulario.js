function Enviar() {
    var nome = document.getElementById("nomeid");
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}

function initScrollSuave (){

    const linksInternos = document.querySelectorAll ('.js-menu a[href^="#"]');

        function scrollToSection (event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

    linksInternos.forEach ((link) => {
        link.addEventListener('click', scrollToSection);
    });

}

initScrollSuave ();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll ('.js-scroll');
    if(sections.length){
        const windowMetade = window.innerHeight * 0.5;

    function animaScroll (){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible)
                section.classList.add('ativo');
            else
                section.classList.remove('ativo');
        })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll ();

  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );



