let toastBox = document.querySelector('.toast-box');

let successMessage = '<img src="Images/checked.png" /> Sucessfully Submitted';
let errorMessage = '<img src="Images/remove.png" /> please fix the error';
let invalidMessage= '<img src="Images/warning.png" /> invalid input try again';

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes('error')) {
    toast.classList.add('error');
  } if(msg.includes('invalid')) {
    toast.classList.add('invalid');
  }

  setTimeout(() => {
    toast.remove();
  },5000)
}

