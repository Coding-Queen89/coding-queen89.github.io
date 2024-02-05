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
    const body = document.querySelector('body');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        body.classList.toggle('uncover');
    });
}



let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length- 1;

slider .querySelector(".controls .up").addEventListener("click", function(){
    if(currentSlide == 0){
        return
    }
    currentSlide--;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide* - 100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide)* - 100}vh`;
});

slider .querySelector(".controls .down").addEventListener("click", function(){
    if(currentSlide == totalSlides){
        return;
    }
    currentSlide++;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide* - 100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide)* - 100}vh`;
});
