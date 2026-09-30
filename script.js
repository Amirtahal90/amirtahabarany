document.documentElement.classList.add("js");

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-ready");

  const footer = document.querySelector(".footer");

  if (footer) {
    const year = new Intl.DateTimeFormat("fa-IR", {
      calendar: "persian",
      year: "numeric"
    }).format(new Date());

    footer.textContent = `© ${year} امیرطاها بارانی`;
  }
});