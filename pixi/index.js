document.getElementById("showMenu").onclick = function () {
  showMenu();
  console.log("its okay");
};
function showMenu() {
  var menuContainer = document.getElementById("menus");

  if (menuContainer.style.display === "block") {
    menuContainer.style.display = "none";
  } else {
    menuContainer.style.display = "block";
  }
}
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rtbanguiz@nemsu.edu.ph",
    Password: "2E0A6D2A4EEE5330CD1D7C87F7AF63E1CAC3",
    To: "richardbanguiz@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Prerigestered",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      " <br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
  hideForm();
}
function showForm() {
  const formDiv = document.getElementById("formDiv");

  formDiv.style.display = "block";
  console.log("hello");
}
function hideForm() {
  const formDiv = document.getElementById("formDiv");
  if (document.getElementById("email") === null) {
    console.log("not allowed");
  } else {
    formDiv.style.display = "none";
  }

  console.log("hello");
}
