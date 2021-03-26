// DOMContentLoaded - załadowanie elementów na stronie
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const navList = document.querySelector('.navbar-collapse');

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

    //Dla każdego elementu (nav-link) nasłuchuje kliknięcia, jeśli wykryję to usuwa .show (chowa menu hamburgerowe)
    navLinkItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')));

    window.addEventListener('scroll', addShadowScroll); //Za każdym razem, gdy użytkownik scrolluje

    nav.addEventListener('click', addShadowBars); //Przełącznik dodawania cienia po wciśnięciu menu hamburgerowego
})