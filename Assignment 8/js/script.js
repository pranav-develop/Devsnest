//jshint esversion: 8

const parent = document.querySelector(".abc");

function appendC() {
    for (let i = 0; i < 1400; i++) {
        console.log("appended");
        const div = document.createElement("div");
        div.classList.add("count" + i);
        div.addEventListener("click", () => {
            if (div.style.backgroundColor == "white") div.style.backgroundColor = "skyblue";
            else div.style.backgroundColor = "white";
        });
        parent.appendChild(div);
    }
}
appendC();
