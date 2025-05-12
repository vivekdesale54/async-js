const auth = 'UxboYuvviEKhYq1DnYWKUP3aXkql6NbSRGsYnQqii3WhiGiwjv6BfP6Z';
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;
const more = document.querySelector(".more");
let page = 1;
let fetchlink;
let currentSearch;

//Event listener
searchInput.addEventListener('input', updateInput);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    currentSearch = searchValue;
    searchPhotos(searchValue);
});
more.addEventListener('click', loadMore);

function updateInput(e) {
    searchValue = e.target.value;
}

async function fetchApi(url) {
    const dataFetch = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    return data;
}

function generatePictures(data) {
    data.photos.forEach(photo => {
        console.log(photo);
        const galleryImg = document.createElement('div');
        galleryImg.classList.add("gallery-img");
        galleryImg.innerHTML = `
        <div class = "gallery-info"> 
        <p>${photo.photographer}</p>
        <a href = ${photo.src.original}>Download</a>
        </div>
        <img src = ${photo.src.large}> </img>
        `;

        gallery.appendChild(galleryImg);
    });
}
async function curatedPhotos() {
    fetchlink = "https://api.pexels.com/v1/curated?per_page=15&page=1"
    const data = await fetchApi(fetchlink);
    generatePictures(data);
}

async function searchPhotos(query){
    clear();
    fetchlink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`
    const data = await fetchApi(fetchlink);
    generatePictures(data);
}

function clear() {
    gallery.innerHTML = '';
    searchInput.value = '';
}

async function loadMore() {
    page++;
    if (currentSearch) {
        fetchlink = `https://api.pexels.com/v1/search?query=${currentSearch}+query&per_page=15&page=${page}`;
    } else {
        fetchlink = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`
    }
    const data = await fetchApi(fetchlink)
    generatePictures(data);
}
curatedPhotos();
