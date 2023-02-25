const footerSvg = document.querySelector('.footer__svg');

const scrollBtn = document.querySelector('.scroll-btn');
const containerScrollBtn1 = document.querySelector('.container__scroll-btn_1');
const containerScrollBtn2 = document.querySelector('.container__scroll-btn_2');
const containerScrollBtn3 = document.querySelector('.container__scroll-btn_3');

footerSvg.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 1330,
    left: 0,
    behavior: 'smooth'
  });
});

containerScrollBtn1.addEventListener('click', function () {
  window.scrollTo({
    top: 2250,
    left: 0,
    behavior: 'smooth'
  });
});

containerScrollBtn2.addEventListener('click', function () {
  window.scrollTo({
    top: 3170,
    left: 0,
    behavior: 'smooth'
  });
});

containerScrollBtn3.addEventListener('click', function () {
  window.scrollTo({
    top: 1330,
    left: 0,
    behavior: 'smooth'
  });
});