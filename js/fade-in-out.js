window.addEventListener('scroll', function() {
    var empresa = document.querySelector('.empresa');
    var h2Empresa = empresa.querySelector('h2');
  
    var containerEmpresa = document.querySelector('.container-empresa');
    var links = containerEmpresa.querySelectorAll('a');
  
    var facaMaisText = document.querySelector('.faca-mais-text');
    var h3FacaMais = facaMaisText.querySelector('h3');
    var pFacaMais = facaMaisText.querySelector('p');

    var exemplo = document.querySelector('.exemplo  ')
  
    if (isElementPartiallyInViewport(empresa)) {
      fadeInOut(h2Empresa);
    }
  
    links.forEach(function(link) {
      if (isElementPartiallyInViewport(containerEmpresa)) {
        fadeInOut(link);
      }
    });
  
    if (isElementPartiallyInViewport(facaMaisText)) {
      fadeInOut(h3FacaMais);
      fadeInOut(pFacaMais);
    }
  });

  if(isElementPartiallyInViewport(exemplo)) {
    fadeInOut(exemplo);
  }
  
  function isElementPartiallyInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
      rect.bottom >= 0 &&
      rect.top <= windowHeight
    );
  }
  
  function fadeInOut(element) {
    var fadeEffect = setInterval(function() {
      if (!element.style.opacity) {
        element.style.opacity = 0;
      }
      if (element.style.opacity < 1) {
        element.style.opacity = parseFloat(element.style.opacity) + 0.05; // Ajuste a velocidade da animação modificando o valor 0.05
      } else {
        clearInterval(fadeEffect);
      }
    }, 50); // Ajuste a velocidade da animação modificando o valor 50
  }