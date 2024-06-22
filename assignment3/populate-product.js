// The Javascript script was a necessary implementation to populate the website with product data, mimicking the varied and dynamic selection in a fashion store. Initially, I included the product's picture, name, and price. However, to focus on the visual appeal and design of the products, I decided to hide the price temporarily, making the first user interaction centered around the product's design.
var productData = [
  ["images/IMG_0284.JPG", "images/IMG_0285.JPG", "STELLA DRESS", "189$"],
  ["images/IMG_0286.JPG", "images/IMG_0287.JPG", "BAELA DRESS", "189$"],
  ["images/IMG_0288.JPG", "images/IMG_0289.JPG", "ROSALYN DRESS", "189$"],
  ["images/IMG_0290.JPG", "images/IMG_0291.JPG", "SAMIRA DRESS", "189$"],
  ["images/IMG_0292.JPG", "images/IMG_0293.JPG", "JOSETTE DRESS", "189$"],
  ["images/IMG_0294.JPG", "images/IMG_0295.JPG", "TILLY DRESS", "189$"],
];

function createProductImage(image) {
  var productImage = document.createElement("div");
  productImage.className = "product-image";
  productImage.style.backgroundImage = "url(" + image[0] + ")";
  productImage.setAttribute("id", "product" + productData.indexOf(image));
  productImage.setAttribute("draggable", true);
  productImage.addEventListener("dragstart", handleDragStart);

  // Hover Function
  productImage.addEventListener("mouseover", function () {
    this.style.backgroundImage = "url(" + image[1] + ")";
    this.parentElement.style.border = "1px solid rgb(0, 0, 0, 1)";
  });
  productImage.addEventListener("mouseout", function () {
    this.style.backgroundImage = "url(" + image[0] + ")";
    this.parentElement.style.border = "1px solid rgb(0, 0, 0, 0)";
  });
  return productImage;
}

function createSizeButton(text) {
  var sizeButton = document.createElement("button");
  sizeButton.textContent = text;
  sizeButton.classList.add("size-button");
  return sizeButton;
}

function addAllProducts() {
  var productList = document.querySelector("#product-lists");
  productData.forEach(function (image) {
    var productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.style.border = "1px solid rgb(0, 0, 0, 0)";

    var productImage = createProductImage(image);
    productDiv.appendChild(productImage);

    var productTitle = document.createElement("h3");
    productTitle.textContent = image[2];
    productTitle.classList.add("center-div");

    productDiv.appendChild(productTitle);

    var productSize = document.createElement("div");
    productSize.classList.add("center-div");
    productSize.classList.add("product-size");

    var size = ["XS", "S", "M", "L", "XL"];
    size.forEach(function (text) {
      var sizeButton = createSizeButton(text);
      productSize.appendChild(sizeButton);
    });
    productDiv.appendChild(productSize);

    productList.appendChild(productDiv);
  });
}

window.onload = addAllProducts;
