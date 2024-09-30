
  document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Карочи тута показывает элемент когда его видно на 10 процентов
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Ну типо когда элемент пояляется на экране добавляется visible и он видимый
        }
      });
    }, options);

    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  });

