document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const moreProducts = document.getElementById('moreProducts');

    // Lắng nghe sự kiện khi collapse hoàn thành việc chuyển đổi
    moreProducts.addEventListener('hidden.bs.collapse', function () {
        toggleButton.textContent = 'Xem thêm';
    });

    moreProducts.addEventListener('shown.bs.collapse', function () {
        toggleButton.textContent = 'Thu gọn';
    });
});
