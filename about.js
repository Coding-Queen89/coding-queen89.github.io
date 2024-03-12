var lastScrollTop = 0;
window.onload = function () {
    var navbar = document.querySelector("header");
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 10) {
            navbar.classList.add('is-scrolling');
        } else {
            navbar.classList.remove('is-scrolling');
        }
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-140px";
        } else {
            navbar.style.top = "0";
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
const values = document.querySelectorAll(".int");
const timeInterval = 3000;
values.forEach((displayElem) => {
    let valueStart = 0;
    const valueEnd = parseInt(displayElem.getAttribute("data-value"));
    const duration = Math.floor(timeInterval / valueEnd);
    const counter = setInterval(() => {
        valueStart += 1;
        displayElem.innerHTML = `${valueStart} +`;
        if (valueStart == valueEnd) {
            displayElem.classList.toggle('active');
            clearInterval(counter);
        }
    }, duration);
});
var typed = new Typed(".text", {
    strings: ["Dentist", "Healer", "Hero"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 20,
    loop: true
});
const dropdow = document.querySelector(".drop-down");
const list = document.querySelector(".listLang");
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selectedImg");

dropdow.addEventListener('click', () => {
    list.classList.toggle('showLangList');
})
