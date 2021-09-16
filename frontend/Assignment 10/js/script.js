//jshint esversion: 8

let each = document.querySelector(".root");
let words = [
    "herb",
    "bank",
    "gem",
    "settle",
    "process",
    "bar",
    "tourist",
    "refuse",
    "housewife",
    "net",
    "convert",
    "feed",
    "confrontation",
    "invite",
    "tree",
    "flush",
    "creed",
    "popular",
];
words = [...words, ...words];
//shuffle array randomly
words.sort(() => (Math.random() > 0.5 ? 1 : -1));
console.log(words);

let xyz = null;
let val = null;

for (let i = 0; i < 36; i++) {
    let temp = document.createElement("div");
    temp.classList.add("number" + i);
    let innertemp = document.createElement("div");
    innertemp.innerText = words[i];
    temp.setAttribute("val", i + "");
    temp.appendChild(innertemp);
    temp.classList.add("each-box");
    each.appendChild(temp);
}

document.querySelectorAll(".each-box").forEach((element) => {
    element.addEventListener("click", (e) => {
        element.childNodes[0].style.display = "block";
        console.log(element.getAttribute("val"));
        setTimeout(() => {
            if (xyz === null) {
                xyz = element;
                val = element.getAttribute("val");
            } else if (element.getAttribute("val") != val) {
                console.log("in second");
                if (xyz.childNodes[0].innerText === element.childNodes[0].innerText) {
                    console.log("yey");
                    element.removeEventListener("click", () => {
                        console.log("temove");
                    });
                    xyz.removeEventListener("click", () => {
                        console.log("temved");
                    });
                    xyz = null;
                    val = null;
                } else {
                    console.log("not fonund");
                    element.childNodes[0].style.display = "none";
                    xyz.childNodes[0].style = "none";
                    xyz = null;
                    val = null;
                }
            }
        }, 1000);
    });
});
