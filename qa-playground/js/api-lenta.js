const loadBtn = document.getElementById("loadData");
const cancelBtn = document.getElementById("cancelLoad");
const status = document.getElementById("status");

let loading = false;

loadBtn.onclick = () => {
  loading = true;
  status.classList.remove("hidden");
  loadBtn.disabled = true;
  cancelBtn.disabled = false;

  // Simula uma API que nunca responde
};

cancelBtn.onclick = () => {
  if (loading) {
    loading = false;
    status.classList.add("hidden");
    loadBtn.disabled = false;
    cancelBtn.disabled = true;
  }
};
