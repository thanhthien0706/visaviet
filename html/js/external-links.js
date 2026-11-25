document.addEventListener("DOMContentLoaded", function () {
  const entryContent = document.querySelectorAll(".entry-content");

  entryContent.forEach(function (contentArea) {
    const links = contentArea.querySelectorAll("a[href]");
    const currentHost = window.location.hostname;

    links.forEach(function (link) {
      const href = link.getAttribute("href");

      // Bỏ qua nếu chứa hình ảnh
      if (link.querySelector("img")) return;

      // Bỏ qua các link đặc biệt
      const skipPatterns = ["tel:", "zalo.me", "m.me", "wa.me"];
      if (skipPatterns.some((pattern) => href.includes(pattern))) return;

      // Kiểm tra xem có phải link ngoài
      let linkHost;
      try {
        linkHost = new URL(href, window.location.href).hostname;
      } catch (e) {
        return; // Không phải URL hợp lệ
      }

      if (linkHost !== currentHost) {
        // Tạo icon superscript
        const icon = document.createElement("sup");
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" style="display:inline-block;vertical-align:super;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

        link.appendChild(icon);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  });
});
