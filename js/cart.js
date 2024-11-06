// cart.js

// Khởi tạo giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cập nhật hiển thị số lượng sản phẩm trong giỏ hàng
function updateCartDisplay() {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.getElementById("cart-badge");
  if (cartBadge) {
    cartBadge.textContent = cartItemCount;
  }
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id == productId);
  if (product) {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: parseFloat(product.price.replace(/[^\d]/g, "")),
      image: product.img,
      quantity: quantity,
    };

    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  }
}

// Hàm hiển thị giỏ hàng
function displayCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  const cartContent = document.getElementById("cartContent");

  if (cart.length === 0) {
    // Giỏ hàng trống
    if (emptyCartMessage) emptyCartMessage.style.display = "block";
    if (cartContent) cartContent.style.display = "none";
    return;
  }

  // Giỏ hàng có sản phẩm
  if (emptyCartMessage) emptyCartMessage.style.display = "none";
  if (cartContent) cartContent.style.display = "block";

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const itemRow = document.createElement("tr");
    itemRow.innerHTML = `
      <td class="align-middle">
        <div class="d-flex align-items-center">
          <img src="${item.image}" alt="${item.title}" width="50" class="me-3"> 
          <span>${item.title}</span>
        </div>
      </td>
      <td class="text-end align-middle">${item.price.toLocaleString()}₫</td>
      <td class="text-center align-middle">
        <input type="number" 
               class="form-control form-control-sm w-75 mx-auto" 
               value="${item.quantity}" 
               min="1" 
               onchange="updateQuantity(${item.id}, this.value)">
      </td>
      <td class="text-end align-middle">${(
        item.price * item.quantity
      ).toLocaleString()}₫</td>
      <td class="text-center align-middle">
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${
          item.id
        })">
          <i class="bi bi-trash"></i> Xóa
        </button>
      </td>
    `;
    cartItemsContainer.appendChild(itemRow);
  });

  updateTotal();
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(productId, newQuantity) {
  const itemIndex = cart.findIndex((item) => item.id == productId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity = parseInt(newQuantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id != productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartDisplay(); // Thêm dòng này để cập nhật số lượng trên biểu tượng giỏ hàng
}

// Cập nhật hiển thị số lượng sản phẩm trong giỏ hàng
function updateCartDisplay() {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.getElementById("cart-badge");
  if (cartBadge) {
    cartBadge.textContent = cartItemCount;
  }
}

// Cập nhật tổng giá trị giỏ hàng
function updateTotal() {
  const totalElement = document.getElementById("cartTotal");
  if (!totalElement) return;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalElement.textContent = `Tổng cộng: ${total.toLocaleString()}₫`;
}

// Gọi hàm này khi trang giỏ hàng được tải
if (document.getElementById("cartItems")) {
  displayCart();
}

// Thêm sự kiện click cho các nút "Thêm vào giỏ hàng"
function setupAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll(".cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const productId = this.getAttribute("data-id");
      const quantity =
        parseInt(document.getElementById("quantity")?.value) || 1; // Lấy số lượng từ input nếu có
      addToCart(productId, quantity);
    });
  });
}

// Gọi hàm này khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
  updateCartDisplay();
  setupAddToCartButtons();
  if (document.getElementById("cartItems")) {
    displayCart();
  }
});
