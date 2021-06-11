//jshint esversion: 8
const minute = document.querySelector(".min-hand");
const hour = document.querySelector(".hr-hand");
const second = document.querySelector(".sec-hand");

//setMin
const setTime = () => {
    const date = new Date();
    second.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
    minute.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
    hour.style.transform = `rotate(${date.getHours() * 30}deg)`;
};
setInterval(setTime, 1000);
