// Wait for the DOM to load before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("designButton");
  
    // Add a click event listener to the button
    button.addEventListener("click", function () {
      window.location.href = "design.html";
    });
  });

  