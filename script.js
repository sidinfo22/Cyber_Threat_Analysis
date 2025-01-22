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
  


