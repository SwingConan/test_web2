document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("signupForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const captchaInput = document.getElementById("captcha");
  const togglePassword = document.getElementById("togglePassword");
  const toggleConfirmPassword = document.getElementById(
    "toggleConfirmPassword"
  );

  // Toggle password visibility
  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      togglePasswordVisibility(password, this);
    });
  }

  if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener("click", function () {
      togglePasswordVisibility(confirmPassword, this);
    });
  }

  // Email validation
  if (email) {
    email.addEventListener("input", function () {
      validateEmail(this.value);
    });
  }

  // Password validation
  if (password) {
    password.addEventListener("input", function () {
      validatePassword(this.value);
    });
  }

  // Confirm password validation
  if (confirmPassword) {
    confirmPassword.addEventListener("input", function () {
      validateConfirmPassword(this.value, password.value);
    });
  }

  // CAPTCHA validation
  if (captchaInput) {
    captchaInput.addEventListener("input", function () {
      validateCaptcha(this.value);
    });

    captchaInput.addEventListener("blur", function () {
      validateCaptcha(this.value);
    });
  }

  // Xử lý form đăng ký
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateSignupForm()) {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Kiểm tra xem email đã tồn tại chưa
        if (localStorage.getItem(email)) {
          showError("email", "Email này đã được đăng ký");
          return;
        }

        // Lưu thông tin đăng ký vào localStorage
        localStorage.setItem(email, JSON.stringify({ password: password }));

        alert("Đăng ký thành công!");
        // Chuyển đến trang đăng nhập
        window.location.href = "login.html";
      }
    });
  }

  // Load CAPTCHA khi trang được tải
  generateCaptcha();
});

function togglePasswordVisibility(passwordField, toggleButton) {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);

  // Thay đổi lớp cho biểu tượng mắt
  const eyeIcon = toggleButton.querySelector("i");
  if (type === "password") {
    eyeIcon.classList.remove("bi-eye"); // Nếu đang ở chế độ password, ẩn mật khẩu
    eyeIcon.classList.add("bi-eye-slash"); // Hiển thị biểu tượng ẩn
  } else {
    eyeIcon.classList.remove("bi-eye-slash"); // Nếu đang ở chế độ text, hiển thị mật khẩu
    eyeIcon.classList.add("bi-eye"); // Hiển thị biểu tượng hiện
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() !== "") {
    if (emailRegex.test(email)) {
      hideError("email");
      return true;
    } else {
      showError("email", "Email không hợp lệ");
      return false;
    }
  } else {
    showError("email", "Email không được để trống");
    return false;
  }
}

function validatePassword(password) {
  if (password.trim() !== "") {
    const isLengthValid = password.length >= 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let errorMessage = [];

    if (!isLengthValid) errorMessage.push("ít nhất 6 ký tự");
    if (!hasUpperCase) errorMessage.push("ít nhất 1 chữ hoa");
    if (!hasLowerCase) errorMessage.push("ít nhất 1 chữ thường");
    if (!hasNumber) errorMessage.push("ít nhất 1 số");
    if (!hasSpecial) errorMessage.push("ít nhất 1 ký tự đặc biệt");

    if (errorMessage.length > 0) {
      showError("password", "Mật khẩu phải có " + errorMessage.join(", "));
      return false;
    } else {
      hideError("password");
      return true;
    }
  } else {
    showError("password", "Password không được để trống");
    return false;
  }
}

function validateConfirmPassword(confirmPass, originalPass) {
  if (confirmPass.trim() !== "") {
    if (confirmPass === originalPass) {
      hideError("confirmPassword");
      return true;
    } else {
      showError("confirmPassword", "Password không khớp");
      return false;
    }
  } else {
    showError("confirmPassword", "Vui lòng xác nhận password");
    return false;
  }
}

function validateCaptcha(inputCaptcha) {
  const captchaCode = document.getElementById("captcha-code").innerText;
  if (inputCaptcha.trim() === "") {
    showError("captcha", "Vui lòng nhập CAPTCHA");
    return false;
  } else if (inputCaptcha !== captchaCode) {
    showError("captcha", "CAPTCHA không đúng");
    return false;
  } else {
    hideError("captcha");
    return true;
  }
}

function validateSignupForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const captchaInput = document.getElementById("captcha").value;

  let isValid = true;

  if (!validateEmail(email)) isValid = false;
  if (!validatePassword(password)) isValid = false;
  if (!validateConfirmPassword(confirmPassword, password)) isValid = false;
  if (!validateCaptcha(captchaInput)) isValid = false;

  return isValid;
}

function showError(fieldId, message) {
  const errorElement = document.getElementById(`${fieldId}Error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
}

function hideError(fieldId) {
  const errorElement = document.getElementById(`${fieldId}Error`);
  if (errorElement) {
    errorElement.style.display = "none";
  }
}

function generateCaptcha() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const captchaElement = document.getElementById("captcha-code");
  if (captchaElement) {
    captchaElement.innerText = captcha;
  }
}

// Refresh CAPTCHA khi click nút refresh
const refreshButton = document.getElementById("refresh-captcha");
if (refreshButton) {
  refreshButton.addEventListener("click", function () {
    generateCaptcha();
  });
}
