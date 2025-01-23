// Get the elements for the main image and the popup tooltip
const mainImage = document.querySelector(".six");
const popupImage = document.querySelector(".Popup");

// Show the popup image when hovering over the main image
mainImage.addEventListener("mouseenter", () => {
  popupImage.classList.add("show"); // Add "show" class to display the popup
});

// Hide the popup image when the mouse leaves the main image
mainImage.addEventListener("mouseleave", () => {
  popupImage.classList.remove("show"); // Remove "show" class to hide the popup
});




