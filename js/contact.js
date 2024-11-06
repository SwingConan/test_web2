document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    if (validateForm()) {
      // Nếu form hợp lệ, bạn có thể gửi dữ liệu ở đây
      alert("Form đã được gửi thành công!");
      form.reset(); // Đặt lại form
    }
  });

  function validateForm() {
    let isValid = true;

    // Kiểm tra Họ và Tên
    if (!validateName(nameInput.value)) {
      showError(nameInput, "Họ và tên không hợp lệ");
      isValid = false;
    } else {
      showSuccess(nameInput);
    }

    // Kiểm tra Email
    if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Email không hợp lệ");
      isValid = false;
    } else {
      showSuccess(emailInput);
    }

    // Kiểm tra Tin nhắn
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Vui lòng nhập tin nhắn");
      isValid = false;
    } else {
      showSuccess(messageInput);
    }

    return isValid;
  }

  function validateName(name) {
    const words = name
      .trim()
      .split(" ")
      .filter((word) => word.length > 0);
    return (
      words.length >= 2 &&
      words.every(
        (word) =>
          word[0] === word[0].toUpperCase() &&
          word.slice(1) === word.slice(1).toLowerCase()
      )
    );
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  }

  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "mb-3 error"; // Thêm class error
    const small =
      formControl.querySelector("small") || document.createElement("small");
    small.innerText = message;
    small.className = "text-danger"; // Đặt class cho thông báo lỗi
    if (!formControl.querySelector("small")) {
      formControl.appendChild(small); // Thêm thông báo lỗi vào formControl
    }
  }

  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "mb-3 success"; // Thêm class success
    const small = formControl.querySelector("small");
    if (small) {
      small.remove(); // Xóa thông báo lỗi nếu có
    }
  }
});
