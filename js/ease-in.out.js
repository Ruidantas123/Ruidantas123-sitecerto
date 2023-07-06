window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var navigationLinks = document.querySelectorAll('nav ul a:not(.btn)');

  navigationLinks.forEach(function(link) {
    if (scrollPosition > 0) {
      link.classList.add('scrolling');
    } else {
      link.classList.remove('scrolling');
    }
  });

  var menu = document.getElementById('menu');
  var menuOffset = menu.offsetTop;
  var windowHeight = window.innerHeight;
  var body = document.body;

  var isMenuOpen = menu.classList.contains('open');
  var menuUL = document.getElementById('menu-ul');

  if (scrollPosition === 0 || isMenuOpen) {
    menu.style.transition = 'none';
    menu.style.backgroundColor = '';
    menu.style.boxShadow = 'none';
    menuUL.classList.add('text-white');
    menuUL.classList.remove('scrolling');
  } else if (scrollPosition > menuOffset - windowHeight / 2) {
    menu.style.transition = 'background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out';
    menu.style.backgroundColor = '#249c88';
    menu.style.boxShadow = '0px 1px 1px rgba(0, 0, 0, 0.5)';
    menuUL.classList.remove('text-white');
    menuUL.classList.add('text-black');
    menuUL.classList.add('scrolling');
  } else {
    menu.style.transition = 'background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out';
    menu.style.backgroundColor = '';
    menu.style.boxShadow = 'none';
    menuUL.classList.remove('text-black');
    menuUL.classList.add('text-white');
    menuUL.classList.remove('scrolling');
  }
});