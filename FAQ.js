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
