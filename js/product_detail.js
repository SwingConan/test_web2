// product_detail.js

document.addEventListener("DOMContentLoaded", function () {
  const buyNowBtn = document.querySelector(".muangay");
  const addToCartBtn = document.querySelector(".themgiohang");
  const quantityInput = document.getElementById("quantity");

  // Xử lý sự kiện click nút "Mua ngay"
  buyNowBtn.addEventListener("click", function () {
    const productId = getProductIdFromUrl();
    const quantity = parseInt(quantityInput.value);

    if (quantity < 1) {
      alert("Vui lòng chọn số lượng hợp lệ");
      return;
    }

    const product = products.find((p) => p.id == productId);
    if (product) {
      const orderItem = {
        id: product.id,
        title: product.title,
        price: parseFloat(product.price.replace(/[^\d]/g, "")),
        image: product.img,
        quantity: quantity,
      };

      // Lưu thông tin mua ngay vào localStorage
      localStorage.setItem("buyNowItem", JSON.stringify(orderItem));
      window.location.href = "../html/checkout.html?buyNow=true";
    }
  });
  // Xử lý sự kiện click nút "Thêm vào giỏ hàng"
  addToCartBtn.addEventListener("click", function () {
    const productId = getProductIdFromUrl();
    const quantity = parseInt(quantityInput.value);

    if (quantity < 1) {
      alert("Vui lòng chọn số lượng hợp lệ");
      return;
    }

    addToCart(productId, quantity);
    updateCartDisplay(); // Cập nhật hiển thị giỏ hàng ngay lập tức
  });
});

// Hàm thêm vào giỏ hàng (có thể đã được định nghĩa trong cart.js)
function addToCart(productId, quantity) {
  const product = products.find((p) => p.id == productId);
  if (product) {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: parseFloat(product.price.replace(/[^\d]/g, "")),
      image: product.img,
      quantity: quantity,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  }
}

// Hàm cập nhật hiển thị giỏ hàng (đã được định nghĩa trong cart.js)
function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.getElementById("cart-badge");
  if (cartBadge) {
    cartBadge.textContent = cartItemCount;
  }
}
