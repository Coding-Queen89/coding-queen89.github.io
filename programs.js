var lastScrollTop = 0;
window.onload = function () {
    var navbar = document.querySelector("header");
    var offer = document.querySelector(".offer");
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 10) {
            navbar.classList.add('is-scrolling');
        } else {
            navbar.classList.remove('is-scrolling');
        }
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-140px";
            offer.style.top = "40px";
        } else {
            navbar.style.top = "0";
            offer.style.top = "90px"
        }
        lastScrollTop = scrollTop;
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.navlist');
    const main = document.querySelector('.main');

    menu_btn.addEventListener('click', function () {
        main.classList.toggle('blur');
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}
gsap.from('.logo div', {
    opacity: 0,
    delay: 1,
    x: 20
})


gsap.utils.toArray('.star').forEach(star => {
    gsap.fromTo(star, {
        rotation: 450,
        opacity: 0,
        y: 100
    }, {
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.5,
        scrollTrigger: star
    })
})
const dropdow = document.querySelector(".drop-down");
const list = document.querySelector(".listLang");
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selectedImg");

dropdow.addEventListener('click', () => {
    list.classList.toggle('showLangList');
})
