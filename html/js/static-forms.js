/**
 * Bản HTML tĩnh không có backend WordPress, nên các form (liên hệ, tìm kiếm) bị chặn gửi.
 * Khi có API / dịch vụ nhận form, thay phần xử lý bên dưới.
 */
document.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.alert("Form chưa được kết nối. Vui lòng liên hệ qua điện thoại hoặc Zalo.");
  },
  true,
);
