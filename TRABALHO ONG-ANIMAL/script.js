// Lista de animais (para a página adocao.html)
const animais = [
  { nome: "Luna", especie: "Gata", img: "https://placekitten.com/300/200" },
  { nome: "Rex", especie: "Cachorro", img: "https://placedog.net/400/300" },
  { nome: "Mimi", especie: "Gata", img: "https://placekitten.com/301/200" },
  { nome: "Thor", especie: "Cachorro", img: "https://placedog.net/401/300" }
];

if (document.getElementById("lista-animais")) {
  const container = document.getElementById("lista-animais");
  animais.forEach(a => {
    const card = document.createElement("div");
    card.classList.add("animal");
    card.innerHTML = `
      <img src="${a.img}" alt="${a.nome}">
      <h3>${a.nome}</h3>
      <p>${a.especie}</p>
    `;
    container.appendChild(card);
  });
}

// Formulário de contato
if (document.getElementById("form-contato")) {
  document.getElementById("form-contato").addEventListener("submit", e => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada 🐾`);
    e.target.reset();
  });
}
