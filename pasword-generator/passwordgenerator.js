const passwordBox = document.querySelector('.input-box');
const length = 12;


document.querySelector('.btn').addEventListener('click', createPassword);
document.querySelector('.copy-btn').addEventListener('click', copyPassword);
const upperCase = 'ABCDEFGHIJKLMNOPQRSTVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '@!#$%^&*()*+,-./:;<=>?@{}~[]';

const anyChar = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (length > password.length) {
    password+= anyChar[Math.floor(Math.random() * anyChar.length)];
  }
  passwordBox.value = password;

}

function copyPassword() {
  passwordBox.select();
  document.execCommand('copy');
}

