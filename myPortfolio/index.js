document.addEventListener("DOMContentLoaded", function () {
  generateRandomShapes(10); // Change the number to the desired quantity of shapes
});

function generateRandomShapes(numShapes) {
  for (var i = 0; i < numShapes; i++) {
    createRandomShape();
  }
}

function createRandomShape() {
  var xPos = Math.floor(Math.random() * window.innerWidth);
  var yPos = Math.floor(Math.random() * window.innerHeight);

  var randomColor = getRandomColor();
  var randomBorderRadius = Math.floor(Math.random() * 50); // Random border radius up to 50
  var randomBlur = Math.floor(Math.random() * 10); // Random blur up to 10

  var shape = document.createElement("div");
  shape.className = "shape";
  shape.style.left = xPos + "px";
  shape.style.top = yPos + "px";
  shape.style.backgroundColor = randomColor;
  shape.style.borderRadius = randomBorderRadius + "px";

  document.body.appendChild(shape);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
      console.log("its notshowing");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
