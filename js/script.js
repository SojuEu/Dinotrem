// Validação simples para o formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.querySelector("#nome").value.trim();
    const email = form.querySelector("#email").value.trim();
    const mensagem = form.querySelector("#mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
    form.reset();
  });
});
