// Chamando o Offcanvas
window.onload = function mainScript() {
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
<<<<<<< HEAD
  scrollFunction();
  navActiveChange();
=======
  scrollFunction()
  nav_active_change()
>>>>>>> f16ba2e81bf58ff2ff7670c09f648023ac2d5f12
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

<<<<<<< HEAD
var navActiveChange = () => {
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.nav-item');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
      if (current === "inicio") {
        current = "home";
      }
      if (current === "portfolio-item" || current === "portfolio") {
        current = "portifolio";
      }
      if (current === "sobre") {
        current = "quem-somos";
      }
    }
  })

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.id === current) {
      li.classList.add('active');
    }
  })
=======
var nav_active_change = () =>{
    const sections = document.querySelectorAll('section')
    const navLi = document.querySelectorAll('.nav-item')
    let current = ''

    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(window.pageYOffset >= (sectionTop - sectionHeight / 3)){
        current = section.getAttribute('id')
        if(current === "inicio"){
          current = "home"
        }
        if(current === "portfolio-item" || current === "portfolio"){
          current = "portifolio"
        }
      }
    })

    navLi.forEach( li => {
      li.classList.remove('active')
      if(li.id === current)
        li.classList.add('active')
    })
    
>>>>>>> f16ba2e81bf58ff2ff7670c09f648023ac2d5f12
}