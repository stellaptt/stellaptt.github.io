//I made a Javascript script. It gets data from the first product and puts it on the website's home page.
//The data has the product's picture, name, and price. But, I've hidden the price for now because it took too long to add.
//The first thing users see is the product's picture, and another picture shows up when they hover over the product. I added all these parts to the 'product list' section in the HTML document.
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
