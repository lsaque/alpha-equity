window.onload = function mainScript() {
  "use strict";

  const offcanvasToggle = document.querySelector(
    '[data-bs-toggle="offcanvas"]',
  );
  const offcanvasCollapse = document.querySelector(".offcanvas-collapse");

  offcanvasToggle.addEventListener("click", function () {
    offcanvasCollapse.classList.toggle("open");
  });

  scrollFunction();
};

// Se o usuário realizar a rolagem, trocar o menu transparente pelo colorido
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  const menu = document.getElementById("menu");

  // Se rolagem maior do que 50px
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Definir header black
    menu.classList.add('header-black');
    menu.classList.remove('header-transparent');

    // Se não
  } else {
    // Definir header transparente
    menu.classList.add('header-transparent');
    menu.classList.remove('header-black');
  }
}
