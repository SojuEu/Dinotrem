// === SISTEMA UNIVERSAL DE TEMA (AUTO / DARK / LIGHT) ===
(function () {

  const html = document.documentElement;

  // Carrega tema salvo ou auto como padrão
  const savedTheme = localStorage.getItem("theme") || "auto";

  // Função principal para aplicar o tema
  function applyTheme(theme) {
    if (theme === "auto") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      html.dataset.bsTheme = prefersDark ? "dark" : "light";
    } else {
      html.dataset.bsTheme = theme;
    }
  }

  // Aplica o tema ao carregar a página
  applyTheme(savedTheme);

  // Ativa botões que mudam tema (qualquer elemento com data-theme)
  document.addEventListener("click", (e) => {
    const theme = e.target.dataset.theme;
    if (!theme) return; // Clique não é botão de tema

    localStorage.setItem("theme", theme);
    applyTheme(theme);
  });

  // Observa mudanças do sistema, mas só se o usuário estiver em AUTO
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("theme") === "auto") {
      applyTheme("auto");
    }
  });

})();




// === NAVBAR HIDE ON SCROLL ===
let lastScroll = 0;
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});
