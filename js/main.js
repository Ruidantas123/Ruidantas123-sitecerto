let ul = document.querySelector('nav .ul');
let slideshow = document.querySelector('.slideshow-container');

function openMenu() {
  ul.classList.add('open');
  slideshow.classList.add('hidden'); // Adicionamos a classe 'hidden' para ocultar o slideshow gradualmente
}

function closeMenu() {
  ul.classList.wremove('open');
  slideshow.classList.remove('hidden'); // Removemos a classe 'hidden' para exibir o slideshow gradualmente
}