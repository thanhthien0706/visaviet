document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tooltip-link").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = el.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
