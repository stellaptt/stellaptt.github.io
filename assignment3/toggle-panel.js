// I also implemented a feature where users can open and close a panel for more detailed information on each product.
// This is facilitated by a collapse feature, which contributes to a cleaner, more streamlined user interface.
// When not in use, the detailed information panel is hidden, thus reducing clutter on the page.
// Users can access this additional information at will, providing a more personalized and interactive shopping experience.

function togglePanelWishList() {
  var panelContent = document.querySelector("#wishlist-panel");
  panelContent.classList.toggle("collapsed");
}
