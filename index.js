
var image1 = randomNumber = Math.floor(Math.random() * 6)+1;
var image2 = randomNumber = Math.floor(Math.random() * 6)+1;

document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + image1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + image2 + ".png");

if (image1 > image2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!!";
} else if (image1 < image2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!!"
} else {
    document.querySelector("h1").innerHTML = "Draw!!"
}