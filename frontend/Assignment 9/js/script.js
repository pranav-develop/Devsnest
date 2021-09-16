//jshint esversion: 8

const parent = document.querySelector(".abc");

let count = 0;
let remain = 1000;

function updateInfo() {
    document.querySelector(".remaining").textContent = remain;
    document.querySelector(".counter").textContent = count;
}

function appendC() {
    updateInfo();
    for (let i = 0; i < 1000; i++) {
        console.log("appended");
        const div = document.createElement("div");
        div.classList.add("count" + i);
        div.addEventListener("click", () => {
            if (div.style.backgroundColor == "white") {
                div.style.backgroundColor = "skyblue";
                count--;
                remain++;
            } else {
                div.style.backgroundColor = "white";
                count++;
                remain--;
            }
            updateInfo();
        });
        parent.appendChild(div);
    }
}
appendC();
