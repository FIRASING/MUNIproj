

document.addEventListener("DOMContentLoaded", function () {
           
 function fadeIn(element, duration) {
var opacity = 0;
var interval = 16;
 var increment = interval / duration;


 element.style.opacity = 0;
 element.style.display = "block";

function updateOpacity() {
 opacity += increment;
  if (opacity >= 1) {
      opacity = 1;
       clearInterval(fadeInterval);
  }

 element.style.opacity = opacity;
  }


  var fadeInterval = setInterval(updateOpacity, interval);
 }


 var elementsToAnimate = [
 document.getElementById("pra"),
document.getElementById("name"),
document.getElementById("firstName"),
document.getElementById("email"),
document.getElementById("phone"),
document.getElementById("address"),
  ];

 elementsToAnimate.forEach(function (element, index) {
  fadeIn(element, 800 + index * 100); // Adjust the duration and delay as needed
 });
 });
 document.addEventListener("DOMContentLoaded", function () {
  // Create a styled div element
  var styledDiv = document.createElement("div");
  styledDiv.innerHTML = "It's my contact, hey again!";
  styledDiv.style.color = "blue";

  // Create a button element with modern styling
  var button = document.createElement("button");
  button.innerHTML = "Click Me";
  button.style.padding = "10px";
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";

  var alertContainer = document.createElement("div");
  alertContainer.style.position = "fixed";
  alertContainer.style.top = "0";
  alertContainer.style.left = "0";
  alertContainer.style.width = "30%";
  alertContainer.style.padding = "20px";
  alertContainer.style.background = "rgb(255,192,203)";
  alertContainer.style.color = "white";
  alertContainer.style.borderBottom = "1px solid gray";
  alertContainer.appendChild(styledDiv);
  alertContainer.appendChild(button);

  document.body.appendChild(alertContainer);

  button.addEventListener("click", function () {

    document.body.removeChild(alertContainer);
  });
});



