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

// === NAVBAR SCROLL EFFECT ===
(function() {
  const navbar = document.getElementById("mainNavbar");
  const scrollThreshold = 20; // Quantidade de scroll para ativar a mudança
  
  function updateNavbar() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  
  // Atualiza ao carregar a página
  updateNavbar();
  
  // Atualiza ao rolar
  window.addEventListener("scroll", updateNavbar);
})();

// === NAVBAR HIDE ON SCROLL ===
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const navbar = document.getElementById("mainNavbar");

  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});