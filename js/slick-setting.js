$('.card-slick').slick({
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1, //wyswietla 1 karte 
    slidesToScroll: 1, //przewija o 1 karte
    responsive: [
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 3
        }
    }
]
});