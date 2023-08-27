const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreButton = document.getElementById('show-more-btn');

let keyword = '';
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url =
    `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=FnqhbLkgX3aA11w371UXdJszx1VZcKhfUpQXgSEin9A&per_page=12`;
  
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResult.innerHTML = '';
  }
  const results = data.results;

  results.map((result) => {
    const image = document.createElement('img');
    image.src = result.urls.small;
    const imageLlink = document.createElement('a');
    imageLlink.href = result.links.html;
    imageLlink.target = '_blank';

    imageLlink.appendChild(image);
    searchResult.appendChild(imageLlink);
  });
  showMoreButton.style.display = 'block';
}
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
  });

showMoreButton.addEventListener('click', () => {
  page++;
  searchImage();
});