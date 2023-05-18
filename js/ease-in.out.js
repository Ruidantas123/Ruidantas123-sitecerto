window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var menuOffset = menu.offsetTop;
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > menuOffset) {
      menu.classList.remove('hidden');
      menu.style.backgroundColor = '#4f9cf9';
      menu.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
    } else {
        
      menu.style.backgroundColor = ''; // Retorna ao estilo original quando o menu não está visível
      menu.style.boxShadow = 'none';
    }
  });