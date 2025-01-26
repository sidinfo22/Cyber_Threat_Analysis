const hamburger = document.querySelector('.hamburger-menu');
const dropdown = document.querySelector('.dropdown-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  dropdown.classList.toggle('active');
});



document.addEventListener('click', (event) => {
    const isClickInsideMenu = document.querySelector('.dropdown-menu').contains(event.target);
    const isHamburger = document.querySelector('.hamburger-menu').contains(event.target);
  
    if (!isClickInsideMenu && !isHamburger) {
      // Close the dropdown menu
      const dropdown = document.querySelector('.dropdown-menu');
      const hamburger = document.querySelector('.hamburger-menu');
      dropdown.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });


document.addEventListener("DOMContentLoaded", function () {
    const reelContainer = document.querySelector(".reel-container");
    const reelContent = reelContainer.innerHTML;
    reelContainer.innerHTML += reelContent; // Duplicate content for seamless scrolling
  });



  function toggleSubMenu() {
    const subMenu = document.querySelector('.menu-item .sub-menu');
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
  }


  document.addEventListener('DOMContentLoaded', function () {
    // Select all the dropdown menu items
    const menuItems = document.querySelectorAll('.sub-menu li');
  
    console.log(`Found ${menuItems.length} menu items.`); // Debug: Count the items
  
    if (menuItems.length === 0) {
      console.error("No menu items found! Ensure the .sub-menu li elements exist in the DOM.");
      return;
    }
  
    // Add a click event listener to each menu item
    menuItems.forEach(item => {
      console.log(`Adding listener to item: ${item.innerText}`);
      item.addEventListener('click', function () {
        const href = this.getAttribute('data-href'); // Get the URL from data-href attribute
        if (href) {
          console.log(`Redirecting to: ${href}`);
          window.location.href = href; // Redirect to the specified page
        } else {
          console.warn("No data-href found for this menu item:", this);
        }
      });
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const selectorButtons = document.querySelectorAll(".selector-button");
    const diagramImage = document.getElementById("cyber-diagram");
  
    const diagrams = {
      "penetration-testing": "images/framework-01.png",
      "vulnerability-assessment": "images/riskamtrix.png",
      "risk-mitigation": "images/1678258984629 copy.png",
    };
  
    let currentIndex = 0;
    let autoSwitchInterval;
    let userInteractionTimeout;
  
    const startAutoSwitch = () => {
      clearInterval(autoSwitchInterval); // Clear any previous interval
      autoSwitchInterval = setInterval(() => {
        switchToNextSelector();
      }, 3000);
    };
  
    const stopAutoSwitch = () => {
      clearInterval(autoSwitchInterval);
    };
  
    const switchToNextSelector = () => {
      currentIndex = (currentIndex + 1) % selectorButtons.length;
      setActiveSelector(currentIndex);
    };
  
    const setActiveSelector = (index) => {
      selectorButtons.forEach((button, idx) => {
        button.classList.toggle("active", idx === index);
        if (idx === index) {
          const diagramKey = button.getAttribute("data-diagram");
          diagramImage.src = diagrams[diagramKey];
        }
      });
    };
  
    selectorButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        stopAutoSwitch(); // Stop auto-switching
        setActiveSelector(index); // Set the clicked selector as active
        currentIndex = index; // Update currentIndex to the clicked one
  
        // Wait 10 seconds before resuming auto-switching
        clearTimeout(userInteractionTimeout);
        userInteractionTimeout = setTimeout(() => {
          startAutoSwitch();
        }, 8000);
      });
    });
  
    startAutoSwitch(); // Start auto-switching on page load
  });





  //learn more
  // Select the button
const learnMoreButton = document.querySelector('.learn-more-btn56');

// Add a click event listener
learnMoreButton.addEventListener('click', () => {
  // Redirect to strategies.html
  window.location.href = 'mission.html';
});


// JavaScript for Learn More Button
document.querySelector('.learn-more-btn42').addEventListener('click', function () {
  window.location.href = 'pentest.html';
});

// JavaScript for Learn More Button
document.querySelector('.learn-more-btn22').addEventListener('click', function () {
  window.location.href = 'governance.html';
});

// JavaScript for "View Documentation" Button
document.querySelector('.learn-more-btn93').addEventListener('click', function () {
  window.location.href = 'incresponse.html';
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".learn-more-btn19");

  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "mission.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".learn-more-btn11");

  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "design.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".learn-more-btn87");

  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "vulnerid.html";
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".learn-more-btn74");

  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "scriptops.html";
    });
  }
});



  // JavaScript for Modal
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const modal = document.getElementById("thankYouModal");
  const modalContent = document.querySelector(".modal-content");
  const closeButton = document.querySelector(".close-button");

  // Function to show the modal
  function showModal(message) {
      modalContent.querySelector("p").textContent = message; // Update modal message
      modal.style.display = "flex"; // Show modal with flex for centering
  }

  // Function to hide the modal
  function hideModal() {
      modal.style.display = "none";
  }

  // Validate the form inputs
  function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
          return false;
      }
      return true;
  }

  // Add event listener to form submission
  form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the form from reloading the page

      // Validate form inputs
      if (validateForm()) {
          showModal("Thank you! Your message has been sent."); // Show success message
          form.reset(); // Clear the form
      } else {
          showModal("Please fill out all fields before sending your message."); // Show error message
      }
  });

  // Close modal when clicking the X button
  closeButton.addEventListener("click", hideModal);

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
      if (e.target === modal) {
          hideModal();
      }
  });
});




