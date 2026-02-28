
function cartLoadAtStart() {
  if (!localStorage.getItem("cart")){
    localStorage.setItem("cart", JSON.stringify([]));
  }
  updateCart();
}

function updateCart(){
  const cart = getCart();
  const cartCountElements = document.querySelectorAll("#cart-count");
  cartCountElements.forEach((element) => {
    element.textContent = cart.length;
  });
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();}

function addItem(productId, productName, productCategory, price) {
  const cart = getCart();
  cart.push({
    id: productId,
    name: productName,
    category: productCategory,
    price: price,
  });
  saveCart(cart);
  alert(productName + " added to cart!");
}

function removeItem(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
  loadItems();
}

function loadItems() {
  const cartContainer = document.getElementById("cart-items-container");
  const empty = document.getElementById("empty-cart-message");

  if (!cartContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.style.display = "none";
    empty.style.display = "block";
  } else {
    cartContainer.style.display = "flex";
    empty.style.display = "none";

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="cart-item-info">
                  <div class="cart-item-name">${item.name}</div>
                  <div class="cart-item-category">${item.category}</div>
                  <div class="cart-item-price">$${item.price}</div>
                </div>
              <button class="remove-from-cart-btn" onclick="removeItem('${item.id}')">
                    Remove
              </button>
            </div>
        `,
      ).join("");
  }
}

document.addEventListener("DOMContentLoaded", cartLoadAtStart);
