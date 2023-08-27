const quote = document.getElementById('quote');
const author = document.getElementById('author');

const apiUrl = 'https://api.quotable.io/random';
async function randomQuote(url) {
  const response = await fetch(url);
  var data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

randomQuote(apiUrl);
function tweet() {
  window.open('http://twitter.com/intent/tweet?text=' + quote.innerHTML + ' --- by ' + author.innerHTML, 'Tweet Window', 'width=600 height=300');
}


