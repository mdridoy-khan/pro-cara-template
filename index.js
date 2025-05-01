// pro care giverr card slider
let proCareCard = new Swiper ('.proCareCard', {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 5000
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".proCareCard .swiper-pagination",
        clickable: true,
    },
});