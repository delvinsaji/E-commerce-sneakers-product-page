let cart_open = 0;

document.querySelector(".cart_btn").addEventListener("click", function () {
  if (cart_open === 0) {
    document.querySelector(".cart3").style.display = "block";
    cart_open = 1;
  } else {
    document.querySelector(".cart3").style.display = "none";
    cart_open = 0;
  }
});

let image_open = 0;
document.querySelector(".person").addEventListener("click", function () {
  if (image_open === 0) {
    document.querySelector(".person_img").style.border = "3px solid orange";
    document.querySelector(".person_img").style.borderRadius = "45px";
    image_open = 1;
  } else {
    document.querySelector(".person_img").style.border = "none";
    image_open = 0;
  }
});

document.querySelector(".first1").addEventListener("click", function () {
  let image = document.querySelector(".first_img");
  image.src =
    "D:\\Web dev\\ecommerce-product-page-main\\images\\image-product-1.jpg";

  let icon = document.querySelector(".first1");
  icon.style.border = "2px solid orange";
  icon.style.borderRadius = "10px";
});

document.querySelector(".first2").addEventListener("click", function () {
  let image = document.querySelector(".first_img");
  image.src =
    "D:\\Web dev\\ecommerce-product-page-main\\images\\image-product-2.jpg";
  let icon = document.querySelector(".first2");
  icon.style.border = "2px solid orange";
  icon.style.borderRadius = "10px";
});

document.querySelector(".first3").addEventListener("click", function () {
  let image = document.querySelector(".first_img");
  image.src =
    "D:\\Web dev\\ecommerce-product-page-main\\images\\image-product-3.jpg";
  let icon = document.querySelector(".first3");
  icon.style.border = "2px solid orange";
  icon.style.borderRadius = "10px";
});

document.querySelector(".first4").addEventListener("click", function () {
  let image = document.querySelector(".first_img");
  image.src =
    "D:\\Web dev\\ecommerce-product-page-main\\images\\image-product-4.jpg";
  let icon = document.querySelector(".first4");
  icon.style.border = "2px solid orange";
  icon.style.borderRadius = "10px";
});

let hovershade = function (class1) {
  class1.style.filter = "contrast(20%) ";
};

let hoverover = function (class1) {
  class1.style.filter = "none";
};

let current = 1;
document.querySelector(".minus").addEventListener("click", function () {
  if (current !== 1) {
    current--;
    document.querySelector(".quantity_number").textContent = String(current);
  }
});

document.querySelector(".plus").addEventListener("click", function () {
  current++;
  document.querySelector(".quantity_number").textContent = String(current);
});

document.querySelector(".add_to_cart").addEventListener("click", function () {
  let empty = document.querySelector(".cart2");
  empty.style.display = "none";
  document.querySelector(".main_cart").style.display = "block";
  document.querySelector(".price_tag").textContent =
    "$125.00 * " + String(current) + " $" + String(current * 125) + ".00";
});

document.querySelector(".delete").addEventListener("click", function () {
  let empty = document.querySelector(".cart2");
  empty.style.display = "block";
  document.querySelector(".main_cart").style.display = "none";
});
