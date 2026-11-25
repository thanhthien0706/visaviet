document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".slider-nav");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const slider = document.getElementById(targetId);

      if (!slider) return;

      const scrollAmount = 220; // Tùy chỉnh theo độ rộng mỗi ảnh + gap

      if (button.classList.contains("left")) {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    });
  });
});
