document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".buttonslayd");
  button.addEventListener("click", function () {
    const hiddenImages = document.querySelectorAll(".gridCard.hidden");
    hiddenImages.forEach(image => {
      image.classList.remove("hidden");
      image.classList.add("visible");
    });
    this.style.display = "none";
  });
});