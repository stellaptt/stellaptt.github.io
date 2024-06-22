// The context for my design was an interactive fashion shopping experience. I sought to create a user-friendly and engaging platform that modeled the excitement of browsing through a physical store.
// The "drag and drop" feature was inspired by the tangible experience of picking up items in a physical store and adding them to a shopping basket.
// I wanted to simulate this experience digitally, allowing users to visualize their selections in a "wishlist." This feature was designed to improve user engagement and decision-making, providing a playful and practical element that fosters comparison and selection of preferred items.
// Drag and drop: https://www.w3schools.com/html/html5_draganddrop.asp

var wishlistElement = [];
var cartElement = [];

function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}
function handleDragOver(event) {
  event.preventDefault();
}

function createImage(image) {
  var imageContainer = document.createElement("div");
  imageContainer.style.overflow = "hidden";
  imageContainer.style.objectFit = "fill";
  imageContainer.style.height = "90%";
  imageContainer.style.width = "90%";
  imageContainer.classList.add("center-div");
  var productImage = document.createElement("img");
  productImage.setAttribute("src", image[0]);
  productImage.style.height = "100%";
  imageContainer.appendChild(productImage);
  // productImage.className = "product-image";
  // productImage.style.backgroundImage = "url(" + image[0] + ")";

  return imageContainer;
}

function createWishlistProduct(product) {
  var productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.style.height = "250px";
  productDiv.style.flexDirection = "column";
  productDiv.classList.add("center-div");

  var productImage = createImage(product);
  productDiv.appendChild(productImage);

  var productTitle = document.createElement("h3");
  productTitle.textContent = product[2];
  productTitle.classList.add("center-div");

  productDiv.appendChild(productTitle);

  return productDiv;
}

function handleDrop(event) {
  event.preventDefault();
  var id = event.dataTransfer.getData("text/plain");
  // event.target.appendChild(document.getElementById(id));
  console.log(event.target);
  let product = productData[id.slice(-1)];
  if (event.target.id == "wishlist-panel") {
    console.log(product);
    wishlistElement.push(product);
    let wishListProduct = createWishlistProduct(product);
    event.target.appendChild(wishListProduct);
  } else if (event.target.id == "cart-panel") {
    console.log(product);
    cartElement.push(product);
  }
}
