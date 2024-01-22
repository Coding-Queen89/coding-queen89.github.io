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
const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accHead");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            //scrollHeight property returns the heighth of an element including padding, but exluding borders, scrollbar or margin.
            item.querySelector("i").classList.replace("bx-plus","bx-minus")
            item.querySelector("i").style.transition = "all 1s";
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("bx-minus","bx-plus");
        }
        removeOpen(index); // calling teh function and also passing the number of  the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("bx-minus","bx-plus");
        }
    })
}
