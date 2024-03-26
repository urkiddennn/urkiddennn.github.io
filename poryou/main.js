var inputField = document.getElementById("inputTogo");
const message = document.getElementById("message");
const help = document.getElementById("help");

var messagePage = "message";
var back = "back";

inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        if (inputField.value == messagePage) {
            help.style.display = "none";
            message.style.display = "flex";
            console.log(inputField.value);
        } else if (inputField.value == back) {
            help.style.display = "block";
            message.style.display = "none";
            console.log("back");
        }
    }
});

function enterInput() {
    if (inputField.value == messagePage) {
        help.style.display = "none";
        message.style.display = "flex";
        console.log(inputField.value);
    } else if (inputField.value == back) {
        help.style.display = "block";
        message.style.display = "none";
        console.log("back");
    }
}
