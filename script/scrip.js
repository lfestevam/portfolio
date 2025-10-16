const cardsAnimados = document.querySelectorAll("#animate-js");

const opcoes = {
  threshold: 0.1 // A ação será disparada quando 10% do elemento estiver visível
};

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    } else {
      entry.target.classList.remove('ativo');
    }
  });
}

const observer = new IntersectionObserver(callback, opcoes);

cardsAnimados.forEach(card => {
  observer.observe(card);
});