
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("styleToggle");
  const stylesheet = document.getElementById("themeStylesheet");

  if (!toggleBtn || !stylesheet) return;

  const savedStyle = localStorage.getItem("selectedStyle");
  if (savedStyle) {
    stylesheet.setAttribute("href", savedStyle);
    toggleBtn.textContent = savedStyle === "style1.css" ? "Other Style" : "Original Style";
  }

  toggleBtn.addEventListener("click", () => {
    const current = stylesheet.getAttribute("href");
    const next = current === "style1.css" ? "style2.css" : "style1.css";

    stylesheet.setAttribute("href", next);
    localStorage.setItem("selectedStyle", next);

    toggleBtn.textContent = next === "style1.css" ? "Other Style" : "Original Style";
  });
});

