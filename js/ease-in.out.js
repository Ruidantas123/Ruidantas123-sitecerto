window.addEventListener('scroll', function() {
  var menu = document.getElementById('menu');
  var menuOffset = menu.offsetTop;
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var body = document.body;

  var isMenuOpen = menu.classList.contains('open');

  if (scrollPosition === 0 || isMenuOpen) {
    menu.style.transition = 'none';
    menu.style.backgroundColor = '';
    menu.style.boxShadow = 'none';
  } else if (scrollPosition > menuOffset - windowHeight / 2) {
    menu.style.transition = 'background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out';
    menu.style.backgroundColor = '#249c88';
    menu.style.boxShadow = '0px 1px 2px rgba(0, 0, 0, 0.5)';
  } else {
    menu.style.transition = 'background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out';
    menu.style.backgroundColor = '';
    menu.style.boxShadow = 'none';
  }
});