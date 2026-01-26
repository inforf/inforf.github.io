const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const toggleBug = document.getElementById("toggleBug");

openBtn.onclick = () => {
  modal.classList.remove("hidden");
};

closeBtn.onclick = () => {
  if (!toggleBug.checked) {
    modal.classList.add("hidden");
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});
