var menuToggle = document.querySelector('.menu-toggle');

// Seleciona o menu mobile
var menuMobile = document.querySelector('.menu-mobile');

// Adiciona um evento de clique ao botão de menu
menuToggle.addEventListener('click', function() {
  // Adiciona ou remove a classe 'active' do menu mobile para mostrar ou esconder o menu
menuMobile.classList.toggle('active');
});