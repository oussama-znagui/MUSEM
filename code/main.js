document.querySelectorAll(".carousel").forEach(carousel => {
const items = carousel.querySelectorAll(".carousel_item");
const buttonHtml = Array.from(items, () => {
    return `<span class="carousel_bitton"></span>` ;
});

carousel.insertAdjacentHTML("beforeend", `
<div class="carousel_nav">
    ${buttonHtml.join("")}
</div>
`);

const buttons = carousel.querySelectorAll(".carousel_bitton");
buttons.forEach((buttons, i) => {
    button.addEventListener("click", () =>{
        items.forEach(items => items.classList.remove("carousel_item-selected"));
        buttons.forEach(button => button.classList.remove("carousel_bitton-selected"));

        items[0].classList.add("carousel_item-selected");
        button[0].classList.add("carousel_bitton-selected");

    }); 

});

});