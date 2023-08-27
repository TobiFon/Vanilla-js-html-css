let imgBox = document.querySelector('.img-box');
let qrImage = document.querySelector('.qr-image');
let qrText = document.querySelector('.qr-text');

function generateqr() {
  if (qrText.value.length > 0) {
    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value
    imgBox.classList.add('show-img')
  } else {
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.add('error')
    }, 3000)
  }
}

document.querySelector('button').addEventListener('click', generateqr)