// Variables
var h3 = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var surpriseMe = document.querySelector(".random");

// Functions
function setGradient() {
    // Set the body background color to the current gradient.
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    // Change h3's contents to display the current color gradient.
    h3.textContent = body.style.background + ";";
}

function getRandomColor() {
    // Generate a random hexadecimal color and return it.
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function setRandomGradient() {
    // Assign a random value to color1 and color2.
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    
    // Call setGradient to set the background color and h3 text content.
    setGradient();
}

// Event Listeners
window.onload = setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
surpriseMe.addEventListener("click", setRandomGradient);
body.onload = setRandomGradient();