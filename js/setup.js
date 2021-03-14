$('.owl-carousel').owlCarousel({
    margin: 10,
    dots: true,
    loop: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});

var btn = $('#see-more');

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 750 }, '300');
});