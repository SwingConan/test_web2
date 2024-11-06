document.addEventListener("DOMContentLoaded", function () {
  const newsData = [
    {
      category: "skincare",
      image: "../img/news/news1.jpg",
      title: "Julyme - thương hiệu mỹ phẩm hương nước hoa đến từ Hàn Quốc",
      text: "Các dòng sản phẩm chăm sóc cơ thể của Julyme có đa dạng mùi hương và độ lưu hương trên cơ thể kéo dài từ 8 đến 12 giờ...",
      id: 1,
    },
    {
      category: "makeup",
      image: "../img/news/news2.png",
      title: "Hermès lần đầu ra mắt sản phẩm make-up mắt",
      text: 'Bộ sản phẩm mới gồm phấn mắt, mascara, 4 loại cọ tán, kẹp bấm mi chuyên dụng với thiết kế sang trọng theo phong cách "xa xỉ thầm lặng"...',
      id: 2,
    },
    {
      category: "haircare",
      image: "../img/news/news3.jpg",
      title: "Grafen - thương hiệu chăm sóc tóc bằng thảo dược của Hàn Quốc",
      text: "Bộ sản phẩm chăm sóc tóc Grafen Root Booster chứa các loại thảo dược, hỗ trợ ngăn ngừa rụng tóc, đẩy nhanh quá trình mọc tóc...",
      id: 3,
    },
    {
      category: "skincare",
      image: "../img/news/news4.jpg",
      title: "Thương hiệu White Repe cam kết bảo vệ làn da cho phụ nữ Việt",
      text: "White Repe đặt mục tiêu trở thành người bạn đồng hành để hoàn thiện vẻ đẹp bằng chính giá trị bên trong cho phụ nữ Việt...",
      id: 4,
    },
    {
      category: "makeup",
      image: "../img/news/news5.jpg",
      title: "Mẹo make-up giúp mắt to hơn",
      text: "Kẻ mí dưới bằng eyeliner trắng, đeo contact lens giãn tròng, gắn mi giả, chuốt mascara làm dày mi... giúp mắt trông to, sáng, gương mặt thêm rạng rỡ...",
      id: 5,
    },
    {
      category: "haircare",
      image: "../img/news/news6.png",
      title: "Bí quyết chăm sóc tóc đẹp đón Tết",
      text: "Chọn đúng loại dầu gội góp phần giúp phái nữ chăm sóc tóc bồng bềnh, khỏe đẹp, tự tin đón Tết. Tuy nhiên, không phải ai cũng biết cách chăm tóc...",
      id: 6,
    },
  ];

  const newsContainer = document.getElementById("newsContainer");

  function createNewsCard(news) {
    return `
        <div class="col-md-4 mb-4">
            <div class="news-card fade-in" data-category="${news.category}">
                <span class="news-category">${news.category}</span>
                <a href="#" class="card-img-link">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}">
                </a>
                <div class="card-body">
                    <a href="#" class="text-decoration-none">
                        <h5 class="card-title">${news.title}</h5>
                    </a>
                    <a href="#" class="text-decoration-none">
                        <p class="card-text">${news.text}</p>
                    </a>
                    <a href="#" class="btn btn-read-more">
                        Đọc thêm
                    </a>
                </div>
            </div>
        </div>
    `;
  }

  
  function renderNews(newsToRender) {
    newsContainer.innerHTML = newsToRender.map(createNewsCard).join("");
    initFadeInObserver();
  }

  function initFadeInObserver() {
    const newsCards = document.querySelectorAll(".news-card");
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active");
          }, 100 * Array.from(newsCards).indexOf(entry.target));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    newsCards.forEach((card) => {
      observer.observe(card);
    });
  }

  // Initial render
  renderNews(newsData);

  // Filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const category = this.dataset.category;
      const filteredNews =
        category === "all"
          ? newsData
          : newsData.filter((news) => news.category === category);

      renderNews(filteredNews);
    });
  });

  // Read More functionality
  newsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-read-more")) {
      e.preventDefault();
      const newsCard = e.target.closest(".news-card");
      const title = newsCard.querySelector(".card-title").textContent;
      const content = newsCard.querySelector(".card-text").textContent;
      const image = newsCard.querySelector(".card-img-top").src;
      showNewsModal(title, content, image);
    }
  });
});

function showNewsModal(title, content, image) {
  // Implement modal functionality here
  console.log("Show modal for:", title);
  // You can create and show a Bootstrap modal here
}
