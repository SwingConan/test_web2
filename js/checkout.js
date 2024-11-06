// Khởi tạo các biến để lưu trạng thái validation
let isNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;
let isAddressValid = false;
let isPaymentValid = false;

document.addEventListener("DOMContentLoaded", function () {
  displayOrderSummary();
  setupValidation();
  setupCheckoutForm();
});

//1
function displayOrderSummary() {
  const orderSummary = document.getElementById("orderSummary");
  const totalAmount = document.getElementById("totalAmount");
  let total = 0;

  // Kiểm tra xem có phải đang trong quá trình mua ngay không
  const urlParams = new URLSearchParams(window.location.search);
  const isBuyNow = urlParams.get("buyNow") === "true";

  let itemsToDisplay = [];

  if (isBuyNow) {
    // Nếu là mua ngay, lấy thông tin từ buyNowItem
    const buyNowItem = JSON.parse(localStorage.getItem("buyNowItem"));
    if (buyNowItem) {
      itemsToDisplay = [buyNowItem];
    }
  } else {
    // Nếu không, lấy thông tin từ giỏ hàng
    itemsToDisplay = JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Hiển thị từng sản phẩm trong đơn hàng
  itemsToDisplay.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
        <p class="text-white">${item.title} x ${item.quantity} - ${(
      item.price * item.quantity
    ).toLocaleString()}₫</p>
      `;
    orderSummary.appendChild(itemElement);
    total += item.price * item.quantity;
  });

  totalAmount.textContent = `Tổng cộng: ${total.toLocaleString()}₫`;
}

// Thiết lập các sự kiện validation
function setupValidation() {
  // Validate Name
  const nameInput = document.getElementById("name");
  nameInput.addEventListener("blur", function () {
    isNameValid = validateName(this);
  });
  nameInput.addEventListener("input", function () {
    if (this.value.trim().length > 0) {
      isNameValid = validateName(this);
    }
  });

  // Validate Email
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("blur", function () {
    isEmailValid = validateEmail(this);
  });
  emailInput.addEventListener("input", function () {
    if (this.value.trim().length > 0) {
      isEmailValid = validateEmail(this);
    }
  });

  // Validate Phone
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("blur", function () {
    isPhoneValid = validatePhone(this);
  });
  phoneInput.addEventListener("input", function () {
    if (this.value.trim().length > 0) {
      isPhoneValid = validatePhone(this);
    }
  });

  // Validate Address
  const addressInput = document.getElementById("address");
  addressInput.addEventListener("blur", function () {
    isAddressValid = validateAddress(this);
  });
  addressInput.addEventListener("input", function () {
    if (this.value.trim().length > 0) {
      isAddressValid = validateAddress(this);
    }
  });

  // Validate Payment Method
  const paymentInput = document.getElementById("paymentMethod");
  paymentInput.addEventListener("change", function () {
    isPaymentValid = validatePayment(this);
  });
}

// Validate họ tên
function validateName(input) {
  const value = input.value.trim();
  const words = value.split(" ").filter((word) => word.length > 0);
  const nameError = document.getElementById("nameError");

  // Kiểm tra có ít nhất 2 từ
  if (words.length < 2) {
    showError(input, nameError, "Vui lòng nhập họ và tên đầy đủ");
    return false;
  }

  // Kiểm tra viết hoa chữ cái đầu của mỗi từ
  const isCapitalized = words.every(
    (word) =>
      word[0] === word[0].toUpperCase() &&
      word.slice(1) === word.slice(1).toLowerCase()
  );

  if (!isCapitalized) {
    showError(input, nameError, "Vui lòng viết hoa chữ cái đầu của mỗi từ");
    return false;
  }

  showSuccess(input, nameError);
  return true;
}

// Validate email
function validateEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const emailError = document.getElementById("emailError");

  if (!emailRegex.test(input.value.trim())) {
    showError(input, emailError, "Vui lòng nhập email hợp lệ (XXX@gmail.com)");
    return false;
  }

  showSuccess(input, emailError);
  return true;
}

// Validate số điện thoại
function validatePhone(input) {
  const phoneRegex = /^[0][0-9]{9}$/;
  const phoneError = document.getElementById("phoneError");

  if (!phoneRegex.test(input.value.trim())) {
    showError(
      input,
      phoneError,
      "Vui lòng nhập số điện thoại hợp lệ (0XX.XXXX.XXX)"
    );
    return false;
  }

  showSuccess(input, phoneError);
  return true;
}

// Validate địa chỉ
function validateAddress(input) {
  const addressError = document.getElementById("addressError");

  if (input.value.trim().length < 10) {
    showError(
      input,
      addressError,
      "Vui lòng nhập địa chỉ chi tiết (ít nhất 10 ký tự)"
    );
    return false;
  }

  showSuccess(input, addressError);
  return true;
}

// Validate phương thức thanh toán
function validatePayment(input) {
  const paymentError = document.getElementById("paymentError");

  if (!input.value) {
    showError(input, paymentError, "Vui lòng chọn phương thức thanh toán");
    return false;
  }

  showSuccess(input, paymentError);
  return true;
}

// Hiển thị lỗi
function showError(input, errorElement, message) {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

// Hiển thị thành công
function showSuccess(input, errorElement) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  errorElement.style.display = "none";
}

// Thiết lập form checkout
function setupCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy thông tin từ form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Kiểm tra xem có phải đang trong quá trình mua ngay không
    const urlParams = new URLSearchParams(window.location.search);
    const isBuyNow = urlParams.get("buyNow") === "true";

    let orderItems;
    if (isBuyNow) {
      // Nếu là mua ngay, lấy thông tin từ buyNowItem
      const buyNowItem = JSON.parse(localStorage.getItem("buyNowItem"));
      orderItems = buyNowItem ? [buyNowItem] : [];
    } else {
      // Nếu không, lấy thông tin từ giỏ hàng
      orderItems = JSON.parse(localStorage.getItem("cart")) || [];
    }

    // Tạo đối tượng đơn hàng
    const order = {
      customerInfo: { name, email, phone, address },
      items: orderItems,
      total: orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      date: new Date().toISOString(),
    };

    // Trong thực tế, bạn sẽ gửi đơn hàng này đến server
    console.log("Đơn hàng đã được đặt:", order);

    // Xóa buyNowItem sau khi đặt hàng thành công
    if (isBuyNow) {
      localStorage.removeItem("buyNowItem");
    }

    // Hiển thị thông báo đặt hàng thành công
    alert("Đặt hàng thành công! Cảm ơn bạn đã mua hàng.");

    // Chuyển hướng về trang chủ hoặc trang xác nhận đơn hàng
    window.location.href = "index.html";
  });
}
