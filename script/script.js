const btnMobile = document.getElementById("btn-mobile");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
btnMobile.addEventListener("click", toggleMenu);
//
const exp = document.getElementById("experience");
function inicioRemove() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
exp.addEventListener("click", inicioRemove);
//
const projetos = document.getElementById("projects");
function projectRemove() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
projetos.addEventListener("click", inicioRemove);
//
const contato = document.getElementById("contact");
function contactRemove() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
contato.addEventListener("click", inicioRemove);
///
//Botão Ver Mais//
const verMais = document.getElementById("btn-ver-mais");
function btnVerMais() {
  const btnVer = document.getElementById("verMais");
  btnVer.classList.toggle("viewMore");
}
verMais.addEventListener("click", btnVerMais);
