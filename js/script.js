let sliderNavbar = document.querySelector(".slider__navbar");
let image = document.querySelector("#image");

sliderNavbar.addEventListener('click', (e) => {
let url = e.target.parentElement.dataset.img;
let color = e.target.parentElement.dataset.color;
document.body.style.background = color;
image.src = url;

})