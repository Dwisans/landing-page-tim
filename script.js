dark.document.addEventListener("DOMContentLoaded", () => {
  const btnTheme = document.getElementById("btn-theme");

  const body = document.body;

  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      body.classList.toggle("dark-theme");

      body.classList.toggle("light-theme");
    });
  }
});
