// Elements
const menuIcon = document.getElementById('menu-icon');  // The image element acting as the menu icon
const menuOverlay = document.getElementById('menu-overlay');  // The menu overlay (hidden by default)
const closeIcon = document.getElementById('close-icon');  // The close icon inside the menu

// Toggle the menu when the image (menu icon) is clicked
menuIcon.addEventListener('click', () => {
  // If the menu is visible, hide it. If it's hidden, show it.
  menuOverlay.classList.toggle('active');
});

// Close the menu when the close icon is clicked
closeIcon.addEventListener('click', () => {
  // Close the menu by removing the 'active' class
  menuOverlay.classList.remove('active');
});


