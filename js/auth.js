document.addEventListener("DOMContentLoaded", function () {
  function updateLoginDisplay() {
    const loginRegisterDiv = document.getElementById("login-register");
    const userInfoDiv = document.getElementById("user-info");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const currentUser = localStorage.getItem("currentUser");

    if (isLoggedIn && currentUser) {
      // Ẩn phần login/register
      if (loginRegisterDiv) {
        loginRegisterDiv.style.display = "none";
      }
      // Hiển thị thông tin người dùng
      if (userInfoDiv) {
        userInfoDiv.style.display = "block";
        const userName = currentUser.split("@")[0];
        const welcomeMessage = userInfoDiv.querySelector("#welcome-message");
        if (welcomeMessage) {
          welcomeMessage.innerHTML = `
                        <div class="dropdown">
                            <button class="btn btn-link text-white dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-person"></i>
                                Xin chào, ${userName}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="userDropdown">
                                <li><a class="dropdown-item" href="../html/cart.html">Đơn hàng của tôi</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#" onclick="logout()">Đăng xuất</a></li>
                            </ul>
                        </div>
                    `;
        }
      }
    } else {
      // Hiển thị phần login/register
      if (loginRegisterDiv) {
        loginRegisterDiv.style.display = "block";
      }
      // Ẩn thông tin người dùng
      if (userInfoDiv) {
        userInfoDiv.style.display = "none";
      }
    }
  }

  // Hàm đăng xuất
  window.logout = function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser ");
    updateLoginDisplay();
    window.location.href = "index.html";
  };

  // Cập nhật hiển thị khi trang được tải
  updateLoginDisplay();
});
