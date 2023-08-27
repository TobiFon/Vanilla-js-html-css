// change navbar style on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10);
});

//show hide faq section

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

  });
  
});

// show menu

let menu = document.querySelector('.nav_menu');
let menuBtn = document.querySelector('#open-menu-btn')
let closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
});
