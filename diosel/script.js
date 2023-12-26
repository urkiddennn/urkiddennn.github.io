document.addEventListener("DOMContentLoaded", function () {
  const snowflakesContainer = document.querySelector(".snowflakes");

  for (let i = 0; i < 20; i++) {
    createSnowflake();
  }

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const minWidth = 5;
    const maxWidth = 30;
    const minHeight = 5;
    const maxHeight = 30;

    snowflake.style.width = `${
      Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth
    }px`;
    snowflake.style.height = `${
      Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight
    }px`;

    snowflake.style.animationDuration = `${Math.random() * 2 + 2}s`;
    snowflake.style.zIndex = 1000;

    snowflakesContainer.appendChild(snowflake);

    snowflake.addEventListener("animationiteration", () => {
      snowflake.style.left = `${Math.random() * 100}vw`;
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("textElement");

  if (textElement) {
    setInterval(randomizeColor, 500);
  } else {
    console.error("Element with id 'textElement' not found.");
  }

  function randomizeColor() {
    const textElement = document.getElementById("textElement");

    if (textElement) {
      const randomColor = getRandomColor();
      textElement.style.color = randomColor;
    } else {
      console.error("Element with id 'textElement' not found.");
    }
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
