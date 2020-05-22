
//This is the nav bar animation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function(){

        //TOGGLE NAV

        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

    });

}

navSlide();

//This is the loading

let logoAI = document.querySelector('#ATOM');

window.addEventListener('load', function(){
    logoAI.classList.remove('animationAI');
});

