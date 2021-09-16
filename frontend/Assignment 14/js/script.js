//jshint esversion: 8

const button = document.querySelector(".only-button");
const outside = document.querySelector(".outside");

button.addEventListener("click", () => {
    button.textContent = "YOU CLICKED ME.... DONT YOU HAVE ANY BUTTONS AT HOME.... DONT EVEN TRY TO DOUBLE CLICK ME";
});

button.addEventListener("dblclick", () => {
    button.textContent = "WHY!!! WHY!!!! WHHHHHHHHHHHHHHHHHHHHHYYY!!!!!!!!!!!!!!!!!";
});

button.addEventListener("mouseover", () => {
    button.textContent = "STOP TOUCHING ME....... N O W";
});

button.addEventListener("mouseleave", () => {
    button.textContent = "Thankyou for leaving me alone";
});

outside.addEventListener("mouseenter", () => {
    button.textContent = "Dont you dare to come near me";
});
outside.addEventListener("mouseleave", () => {
    button.textContent = "Ya Stay away.";
});
