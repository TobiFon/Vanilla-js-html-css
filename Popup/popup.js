let button = document.querySelector('.btn');
let ok = document.querySelector('.ok');
button.onclick = openPopup;
ok.onclick = closePopup;


let popUp = document.querySelector('.popup');
function openPopup() { 
  popUp.classList.add('openPopup');
}
function closePopup() { 
  popUp.classList.remove('openPopup');
}
