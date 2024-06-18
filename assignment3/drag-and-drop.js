var wishlistElement = []
var cartElement = []

function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
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
    var id = event.dataTransfer.getData('text/plain');
    // event.target.appendChild(document.getElementById(id));
    console.log(event.target)
    let product = productData[id.slice(-1)]
    if (event.target.id == 'wishlist-panel') {
        console.log(product)
        wishlistElement.push(product)
        let wishListProduct = createWishlistProduct(product)
        event.target.appendChild(wishListProduct);
    } else if (event.target.id == 'cart-panel') {
        console.log(product)
        cartElement.push(product)
    }
}