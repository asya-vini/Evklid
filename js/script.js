new Accordion('.accordion-container');


//Свайпер
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  }
});

//Бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {
  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

//Шаги

let tabsBtn = document.querySelectorAll('.stages-btn');
let tabsItem = document.querySelectorAll('.stages__descr');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('stages-btn--active')});
    e.currentTarget.classList.add('stages-btn--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('stages__descr--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('stages__descr--active');
  });
});

//Поиск
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search').addEventListener('click', (e) => {
    document.getElementById('search').classList.add('search--active')
  })

  document.getElementById('search-close').addEventListener('click', (e) => {
    document.getElementById('search').classList.remove('search--active')
  })

  document.getElementById('search').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

