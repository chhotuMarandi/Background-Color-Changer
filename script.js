const colors = ["red", "green", "blue", "rgba(0, 207, 255)", "#ffdd55"];
const button = document.getElementById("btn");
const color = document.querySelector(".color-value");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length); /*to get random number*/
}