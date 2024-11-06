document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(
    'input[placeholder="Email Address"]'
  );
  const passwordInput = document.querySelector('input[type="password"]');
  const loginButton = document.getElementById("loginButton");
  const rememberMeCheckbox = document.getElementById("formCheck");

  // Kiểm tra và điền thông tin đăng nhập đã lưu (nếu có)
  if (localStorage.getItem("rememberedUser")) {
    const rememberedUser = JSON.parse(localStorage.getItem("rememberedUser"));
    emailInput.value = rememberedUser.email;
    passwordInput.value = rememberedUser.password;
    rememberMeCheckbox.checked = true;
  }

  // Hàm lưu trạng thái đăng nhập
  function saveLoginState(email) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", email);
  }

  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Kiểm tra nếu email hoặc mật khẩu trống
    if (email === "") {
      showError("Vui lòng nhập địa chỉ email.");
      return;
    }

    if (password === "") {
      showError("Vui lòng nhập mật khẩu.");
      return;
    }

    // Kiểm tra định dạng email
    if (!validateEmail(email)) {
      showError("Vui lòng nhập một địa chỉ email hợp lệ.");
      return;
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
      showError("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }

    // Kiểm tra thông tin đăng nhập
    const userData = localStorage.getItem(email);
    if (userData) {
      const storedPassword = JSON.parse(userData).password;
      if (password === storedPassword) {
        if (rememberMeCheckbox.checked) {
          localStorage.setItem(
            "rememberedUser",
            JSON.stringify({ email, password })
          );
        } else {
          localStorage.removeItem("rememberedUser");
        }
        // Lưu trạng thái đăng nhập
        saveLoginState(email);
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
      } else {
        showError("Mật khẩu không đúng.");
      }
    } else {
      showError("Email không tồn tại.");
    }
  });

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function showError(message) {
    // Kiểm tra xem có thông báo lỗi nào trước đó không
    const existingError = document.querySelector(".alert-danger");
    if (existingError) {
      existingError.remove();
    }

    const errorDiv = document.createElement("div");
    errorDiv.className = "alert alert-danger mt-3";
    errorDiv.textContent = message;

    const container = document.querySelector(".right-box");

    if (container) {
      container.appendChild(errorDiv);
      setTimeout(() => {
        errorDiv.classList.add("show");
      }, 10);
    } else {
      console.error("Không thể tìm thấy phần tử cha.");
    }

    setTimeout(() => {
      errorDiv.classList.remove("show");
      setTimeout(() => {
        errorDiv.remove();
      }, 500);
    }, 3000);
  }

  // Xử lý đăng nhập bằng Google (giả lập)
  const googleSignInButton = document.getElementById("google");
  googleSignInButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Tính năng đăng nhập bằng Google đang được phát triển.");
  });

  // Xử lý quên mật khẩu
  const forgotPasswordLink = document.querySelector(".forgot a");
  forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Tính năng quên mật khẩu đang được phát triển.");
  });
});
