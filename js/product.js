// Dữ liệu giả lập sản phẩm để minh họa
const products = [
  {
    id: 1,
    title:
      "Simple Gel Rửa Mặt Purifying Gel Wash Shine-Free And Clear Skin 150ml",
    price: "100,320₫",
    price_sale: "132,000₫",
    discount_percentage: 24,
    description:
      "Simple Gel Rửa Mặt Purifying Gel Wash Shine-Free And Clear Skin 150ml giúp kiềm dầu, ngừa mụn cho da dầu dễ nổi mụn. Với chất gel thanh khiết chứa chiết xuất Cây Phỉ-Witch Hazel, Kẽm, Prebiotic từ thực vật, Niacinamide hay còn gọi là Vitamin B3, Simple cuốn đi bụi bẩn, tạp chất và dầu thừa, làm sạch da và giảm bóng nhờn, ngừa mụn hiệu quả",
    img: "..//img/product/simple.png",
  },
  {
    id: 2,
    title: "Le Nord Sữa rửa mặt cho nam Mountain Green Facial Wash - 100g",
    price: "78,720đ",
    price_sale: "96,000đ",
    discount_percentage: 18,
    description:
      "Sữa rửa mặt cho nam Le Nord Mountain Green Facial Wash với chiết xuất từ 5 loại tảo biển, và bông atiso sữa rửa mặt LeNord phù hợp cho làn da nhiều dầu và lỗ chân lông to của nam giới giúp làm sạch, lấy đi các bã nhờn, kiềm dầu và hỗ trợ cấp ẩm cho da.",
    img: "../img/product/le_nord.png",
  },
  {
    id: 3,
    title: "ON:) THE BODY Sữa rửa mặt Rice therapy Cleanser 150ml",
    price: "108,750đ",
    price_sale: "145,00₫đ",
    discount_percentage: 25,
    description:
      "Sữa rửa mặt Rice therapy Artemisia pH Balance Cleanser với chiết xuất ngải cứu kết hợp với bột gạo giúp cân bằng độ pH, dưỡng ẩm hiệu quả và chăm sóc làn da từ sâu bên trong. Với chiết xuất diếp cá phù hợp với làn da mụn, giúp tăng khả năng kháng viêm, sạch khuẩn, mang lại làn da khỏe mạnh, mịn màng.",
    img: "../img/product/rice.png",
  },
  {
    id: 4,
    title:
      "Eucerin Gel rửa mặt Acne-oil Control Pro Acne Solution Cleansing Gel 75ml",
    price: "188,100đ",
    price_sale: "209,000đ",
    discount_percentage: 10,
    description:
      "Eucerin Gel rửa mặt Acne-oil Control Pro Acne Solution Cleansing Gel 75ml phù hợp với mọi loại da, đặc biệt là da nhờn mụn nhờ không chứa xà phòng và hương liệu, chứa 6% Ampho-Tensides giúp loại bỏ bã nhờn dư thừa và làm sạch bụi bẩn trên da, có đặc tính ngăn ngừa vi khuẩn mang lại một làn da sạch khỏe.",
    img: "../img/product/eucerin.png",
  },
  {
    id: 5,
    title: "Cocoon Tinh chất nghệ Hưng Yên Turmeric Serum C10 30ml",
    price: "292,500đ",
    price_sale: "325,000đ",
    discount_percentage: 10,
    description:
      "Tinh chất nghệ Cocoon Hưng Yên Turmeric Serum C10 rất giàu turmerone, được xé nhỏ và lơ lửng trong một hỗn hợp kết cấu mọng nước chứa Vitamin B3, NAG và Vitamin C (3-o-ethyl ascorbic acid) tạo thành tinh chất nghệ có tác dụng chống oxy hóa mạnh mẽ giúp tăng cường khả năng làm sáng da, cải thiện làn da xỉn màu và làm mờ vết thâm.",
    img: "../img/product/cocoon.png",
  },
  {
    id: 6,
    title: "About Me Tinh chất dưỡng trắng Kakadu C Dark Spot Serum 50ml",
    price: "364,000đ",
    price_sale: "560,000đ",
    discount_percentage: 35,
    description:
      "About Me Tinh chất dưỡng trắng Kakadu C Dark Spot Serum 50ml có chứa 70% chiết xuất mận Kakadu và Niacinamide sẽ giúp làm sáng tông màu da và và cải thiện tình nám, tàn nhang, thâm bên ngoài da đến hắc tố bên trong da, giúp nuôi dưỡng làn da săn chắc, sáng mịn và đều màu.",
    img: "../img/product/about_me.png",
  },
  {
    id: 7,
    title: "Balance Active Formula Serum Cấp Nước Dưỡng Ẩm Hyaluronic 30ml",
    price: "151,000đ",
    price_sale: "260,000đ",
    discount_percentage: 42,
    description:
      "Serum Cấp Nước Dưỡng Ẩm Balance Active Formula Hyaluronic với thành phần chính là Hyaluronic Acid giúp cung cấp nước mạnh mẽ cho làn da, giữ ẩm khiến da trở nên căng mướt. Đồng thời giảm tiết dầu nhờn, cải thiện độ đàn hồi giúp da luôn căng đầy sức sống.",
    img: "../img/product/balance.png",
  },
  {
    id: 8,
    title:
      "Mary&May Tinh chất dưỡng da Houttuynia Cordata + Tea Tree Serum 30ml",
    price: "301,500đ",
    price_sale: "450,000đ",
    discount_percentage: 33,
    description:
      "Mary&May Tinh chất dưỡng da Houttuynia Cordata + Tea Tree Serum tập trung khả năng cải thiện lỗ chân lông và làm dịu làn da đang kích ứng hoặc sưng v.iêm, được chiết xuất từ ​​85% cây diếp cá và 9,7% chiết xuất cây trà cải thiện các lỗ chân lông và làm dịu làn da với các đặc tính k.háng k.huẩn và c.hống v.iêm.",
    img: "../img/product/Mary_may.png",
  },
  {
    id: 9,
    title: "Diane Castel Paris Nước hoa Very Oud Eau De Parfum 100ml",
    price: "414,000đ",
    price_sale: "690,000đ",
    discount_percentage: 40,
    description:
      "Diane Castel Paris Nước hoa Very Oud Eau De Parfum 100ml mang nét đẹp của văn hóa Phương Đông với hương gỗ chủ đạo, mạnh mẽ và bí ẩn. Làn hương chuyển mình tinh tế từ vị tươi mới của mâm xôi sang da thuộc nồng đậm rồi trở nên ấm áp với trầm hương cá tính.",
    img: "../img/product/Diane.png",
  },
  {
    id: 10,
    title: "Once Upon A Fragrance Nước hoa (SLGH)",
    price: "792,000đ",
    price_sale: "1,320,000đ",
    discount_percentage: 40,
    description:
      "Nước hoa 'Once Upon a Fragrance' là thành quả của các nhà chế tác nước hoa hàng đầu tại Pháp. Từng giọt hương là kết tinh của những nguyên liệu thô được chọn lọc tốt nhất. Mùi hương đầy cảm hứng bộc lộ toàn bộ trạng thái cảm xúc: hạnh phúc, hoài niệm, nhiệt huyết../. mang đến cho bạn những trải nghiệm mới, tự do vượt khỏi mọi giới hạn không gian và thời gian để từ đó tìm ra PHONG CÁCH RIÊNG và tốt nhất của chính mình.",
    img: "../img/product/fragrance.png",
  },
  {
    id: 11,
    title:
      "Diane Castel Paris Nước hoa Chorus For Men Paris Eau De Parfum 100ml",
    price: "390,000đ",
    price_sale: "650,000đ",
    discount_percentage: 40,
    description:
      "Diane Castel Paris Nước hoa Chorus For Men Paris Eau De Parfum 100ml gây thương nhớ nhờ nhóm hương gỗ gia vị phóng khoáng, năng lượng. Điểm nhấn của làn hương là sự kết hợp ăn ý giữa táo xanh tươi mát, tiêu đen tinh tế hòa cùng tuyết tùng trắng ấm áp và hổ phách nồng nàn, lôi cuốn.",
    img: "../img/product/chorus.png",
  },
  {
    id: 12,
    title: "Diane Castel Paris Nước hoa Prodigio Eau De Parfum 100ml",
    price: "432,000đ",
    price_sale: "720,00₫",
    discount_percentage: 40,
    description:
      "Diane Castel Paris Nước hoa Prodigio Eau De Parfum 100ml làm bật lên sự mạnh mẽ và phong trần của các quý ông. Nét đặc trưng của nhóm hương gỗ hổ phách được khắc họa rõ nét nhờ gỗ đàn hương ấm áp và hoắc hương ngọt dịu.",
    img: "../img/product/prodigio.png",
  },
  {
    id: 13,
    title:
      "Dr's Formula Dầu Gội Cố Định Màu tóc nhuộm Color Fixing & Scalp Treatment Shampoo 580g",
    price: "273,000đ",
    price_sale: "350,000đ",
    discount_percentage: 22,
    description:
      "Dầu gội cố định màu tóc nhuộm Dr's Formula Color Fixing & Scalp Treatment Shampoo giúp giữ màu tóc lâu trôi và rực rỡ với công nghệ cố định màu đặc biệt giúp phủ kín các khoảng trống của tóc để giảm hiện tượng mất màu và giúp màu tóc bền lâu hơn và không phai màu.",
    img: "../img/product/dr_fomula.jpg",
  },
  {
    id: 14,
    title: "Dầu gội dưỡng tóc bóng mượt Tsubaki Premium Moist Sampoo 490ml",
    price: "166,000đ",
    price_sale: "215,000đ",
    discount_percentage: 23,
    description:
      "Dầu gội Tsubaki Premium Moist Shampoo được thiết kế dành cho những mái tóc khô xơ và thiếu độ bóng mượt, giúp làm sạch nhẹ nhàng và chăm sóc da đầu, đồng thời cung cấp độ ẩm và duy trì sự bóng mượt từ gốc đến ngọn, sửa chữa tóc khô ngay từ trong lõi.",
    img: "../img/product/tsubaki.png",
  },
  {
    id: 15,
    title: "Beyond Dầu gội Professional Defense Shampoo 500ml",
    price: "465,000đ",
    price_sale: "620,000đ",
    discount_percentage: 25,
    description:
      "Beyond Dầu gội Professional Defense Shampoo 500ml là dòng sản phẩm thuần chay và an toàn cho làn da, không gây kích ứng, cùng với hương thơm tươi mát từ quả mọng thiên nhiên. ",
    img: "../img/product/beyond.jpg",
  },
  {
    id: 16,
    title: "Aekyung Kerasys Dầu gội Royal Propolis Green Shampoo 500ml",
    price: "178,350đ",
    price_sale: "205,000đ",
    discount_percentage: 13,
    description:
      "Aekyung Kerasys Dầu gội Royal Propolis Green Shampoo 500ml với thành phần từ keo ong, giúp nuôi dưỡng tóc chắc khỏe, tạo hàng rào bảo về và dưỡng ẩm chuyên sâu cho tóc khô xơ, chẻ ngọn.",
    img: "../img/product/Aekyung_Kerasys.png",
  },
  {
    id: 17,
    title: "Cocoon Gel rửa mặt cà phê Dak Lak 140ml",
    price: "156,000đ",
    price_sale: "195,000đ",
    discount_percentage: 20,
    description:
      "Gel rửa mặt cà phê Cocoon Dak Lak với công thức dịu nhẹ không chứa sulfate, gel rửa mặt cà phê Đắk Lắk có khả năng làm sạch hiệu quả mà không gây khô da, mang lại cảm giác sảng khoái cùng một làn da tươi mới, sạch thoáng và trông tràn đầy sinh lực để bắt đầu một ngày mới.",
    img: "../img/product/the_coocoon.png",
  },
];

// Hàm lấy giá trị query parameter từ URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Hàm hiển thị thông tin chi tiết sản phẩm
function loadProductDetail(productId) {
  const product = products.find((p) => p.id == productId); // Tìm sản phẩm dựa trên ID

  if (product) {
    // Cập nhật nội dung sản phẩm
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-price-sale").textContent =
      product.price_sale;
    document.getElementById(
      "discount-percentage"
    ).textContent = `Giảm ${product.discount_percentage}%`;
    document.getElementById("product-description").textContent =
      product.description;
    document.getElementById("product-img").src = product.img;

    // Hiển thị phần chi tiết sản phẩm
    document.getElementById("product-detail-container").style.display = "block";
    document.getElementById("no-product-message").style.display = "none";
  } else {
    // Nếu không có sản phẩm thì hiện thông báo
    document.getElementById("no-product-message").style.display = "block";
    document.getElementById("product-detail-container").style.display = "none";
  }
}

// Khi trang được tải, lấy ID sản phẩm từ URL và hiển thị sản phẩm
document.addEventListener("DOMContentLoaded", () => {
  const productId = getProductIdFromUrl();
  loadProductDetail(productId);
});

// hàm rút gọn link web
function getProductDetailUrl(productId) {
  return `/html/product_detail.html?id=${productId}`;
}
