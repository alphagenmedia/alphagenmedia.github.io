const themes = ["neu", "glass", "flat"];
document.documentElement.dataset.theme =
  themes[Math.floor(Math.random() * themes.length)];

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const lastUpdated = document.getElementById("lastUpdated");
if (lastUpdated) {
  lastUpdated.textContent = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
