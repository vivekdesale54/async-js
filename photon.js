const auth = 'UxboYuvviEKhYq1DnYWKUP3aXkql6NbSRGsYnQqii3WhiGiwjv6BfP6Z';
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitButton = document.querySelector(".submit-btn");
let searchValue;

async function curatedPhotos(){
    const dataFetch = await fetch("https://api.pexels.com/v1/curated?per_page=1", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    data.photos.forEach(photo => {
        console.log(photo);
        const galleryImg = document.createElement('div');
        galleryImg.classList.add("gallery-img");
        galleryImg.innerHTML = `<img src = ${photo.src.large}> </img>
        <p>${photo.photographer}</p>
        `;
        // galleryImg.innerHTML = `<img src = ${photo.src.landscape}> </img>
        // <p>${photo.photographer}</p>
        // `;
        // galleryImg.innerHTML = `<img src = ${photo.src.large2x}> </img>
        // <p>${photo.photographer}</p>
        // `;
        // galleryImg.innerHTML = `<img src = ${photo.src.medium}> </img>
        // <p>${photo.photographer}</p>
        // `;
        // galleryImg.innerHTML = `<img src = ${photo.src.original}> </img>
        // <p>${photo.photographer}</p>
        // `;
        // galleryImg.innerHTML = `<img src = ${photo.src.portrait}> </img>
        // <p>${photo.photographer}</p>
        // `;
        // galleryImg.innerHTML = `<img src = ${photo.src.small}> </img>
        // <p>${photo.photographer}</p>
        // `;
        // galleryImg.innerHTML = `<img src = ${photo.src.tiny}> </img>
        // <p>${photo.photographer}</p>
        // `;
      

        gallery.appendChild(galleryImg);
    });
}

async function searchPhotos(query){
    const dataFetch = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=1", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: auth
        }
    });

curatedPhotos();



