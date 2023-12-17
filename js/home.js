document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('section').forEach(function (section) {
        section.addEventListener('click', function () {
            section.style.backgroundColor = '#a797fb';
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Create a styled div element
    var styledDiv = document.createElement("div");
    styledDiv.innerHTML = "bonjour cher lecteur";
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
  
    // Display the styled div and button in an alert-like manner
    var alertContainer = document.createElement("div");
    alertContainer.style.position = "fixed";
    alertContainer.style.top = "0";
    alertContainer.style.left = "0";
    alertContainer.style.width = "30%";
    alertContainer.style.padding = "20px";
    alertContainer.style.background = "#f8f9fa";
    alertContainer.style.color = "white";
    alertContainer.style.borderBottom = "1px solid gray";
    alertContainer.appendChild(styledDiv);
    alertContainer.appendChild(button);
  
    // Append the alert container to the body
    document.body.appendChild(alertContainer);
  
    // Add click event listener to close the alert
    button.addEventListener("click", function () {
      // Remove the alert container from the DOM
      document.body.removeChild(alertContainer);
    });
  });
 