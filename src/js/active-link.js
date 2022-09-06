document.addEventListener('DOMContentLoaded', function() {

  const navInit = () => {
    const nav = document.querySelector('.nav'); // ищем блок навигации
    const links = document.querySelectorAll('.nav__link'); // ищем все навигационные ссылки
    const sections = document.querySelectorAll('.anchor'); // ищем все секции
    sections.forEach(section => { // для каждой секции
      if (window.scrollY >= section.offsetTop - 1) { // проверяем, если страница прокручена больше, чем расстояние
        // секции от начала страницы
        links.forEach(link => { // для каждой ссылки
          link.classList.remove('nav__link--current'); // удаляем активный класс
          if (link.dataset.section === section.dataset.section) { // проверяем, если data-атрибуты ссылки и секции совпадают
            link.classList.add('nav__link--current'); // добавляем ссылке активный класс
          }
        });
      }
    });
  };
  navInit(); // запускаем функцию при загрузке страницы
  window.addEventListener('scroll', () => {
    navInit(); // запускаем функцию при скролле страницы
  });
  window.addEventListener('resize', () => {
    navInit(); // запускаем функцию при ресайзе страницы
  });
});
