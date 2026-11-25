/**
 * Website chỉ điều hướng giữa các trang có trong project.
 * Link ra ngoài (kể cả link do script / widget tạo ra lúc chạy) và link để trống "#" sẽ không đi đâu cả.
 */
(function () {
  function isOutside(value) {
    var url = new URL(value, window.location.href);
    return /^https?:$/.test(url.protocol) && url.host !== window.location.host;
  }

  function guard(event) {
    var link = event.target.closest && event.target.closest("a[href], area[href]");
    if (!link) return;
    var href = link.getAttribute("href");
    if (href === "#" || isOutside(href)) event.preventDefault();
  }

  document.addEventListener("click", guard, true);
  document.addEventListener("auxclick", guard, true);

  var open = window.open;
  window.open = function (url) {
    if (url && isOutside(url)) return null;
    return open.apply(window, arguments);
  };
})();
