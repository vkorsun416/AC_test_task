let block = document.querySelectorAll(".block-wrapper");
let click = document.querySelectorAll(".click-text");

for (let i = 0; i < click.length; i++) {
    click[i].onclick = function () {
        block[i].classList.toggle("active");
    }
}

const swiper = new Swiper('.swiper1', {
    pagination: {
        el: ".pag1",
    },
    loop: true,
    freeMode: {
        enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
    },
});

const swiper2 = new Swiper('.swiper2', {
    pagination: {
        el: ".pag2",
    },
    loop: true,
    freeMode: {
        enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },
});

const swiper3 = new Swiper('.swiper3', {
    pagination: {
        el: ".pag3",
    },
    loop: true,
    freeMode: {
        enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
        nextEl: '.next3',
        prevEl: '.prev3',
    },
});