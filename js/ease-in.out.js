window.addEventListener('scroll', function() {
  var menu = document.getElementById('menu');
  var menuOffset = menu.offsetTop;
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var body = document.body;
  var originalBackgroundColor = window.getComputedStyle(body).getPropertyValue('background-color');


  
  if (scrollPosition === 0) {
    menu.classList.remove('ease-in-out');
    menu.style.backgroundColor = '';
    menu.style.boxShadow = 'none';
  } else if (scrollPosition > menuOffset - windowHeight / 2) {
    menu.classList.remove('hidden');
    menu.classList.add('ease-in-out');
    menu.style.backgroundColor = ('#4f9cf9');
    menu.style.boxShadow = '0px 1px 2px rgba(0, 0, 0, 0.5)';
  } else {
    menu.classList.remove('ease-in-out');
    menu.style.backgroundColor = '';
    menu.style.boxShadow = 'none';
  }
});