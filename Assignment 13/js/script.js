//jshint esversion: 8

const memesContainer = document.querySelector(".memes-section");

function getMemes() {
    const count = document.querySelector(".input input").value;
    fetch(`https://meme-api.herokuapp.com/gimme/wholesomememes/${count}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.memes.forEach((meme) => {
                const img = document.createElement("img");
                img.src = meme.preview[2];
                memesContainer.appendChild(img);
            });
        })
        .catch((err) => {
            console.log(err);
        });
}
