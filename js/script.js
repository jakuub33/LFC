// DOMContentLoaded - załadowanie elementów na stronie
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');

    function addShadowScroll() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }
    }

    // Zabezpieczenie, żeby shadow pozostał, gdy scrollY >= 600 i wciśniemy menu hamburgerowe
    function addShadowBars() {
        if (window.scrollY <= 300) {
            nav.classList.add('shadow-bg');
        }
    }

    window.addEventListener('scroll', addShadowScroll); //Za każdym razem, gdy użytkownik scrolluje:

    nav.addEventListener('click', addShadowBars); //Przełącznik dodawania cienia po wciśnięciu menu hamburgerowego
})