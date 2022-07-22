const input = document.getElementById('searchbar')
const searchBtn = document.getElementById('search-btn')
const main = document.getElementById('main');

function getMovieData(){
    const movieName = input.value;
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=f7e045e1`

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        main.innerHTML = `
            <h1>${data.Title}</h1>
            <span>${data.Year}</span>
            <br>
            <h4>Genre: ${data.Genre}</h4>
            <h5>Language: ${data.Language}</h5>
            <p>${data.Plot}</p>
        `
    })
    .catch(err=>console.log(err))
}

searchBtn.addEventListener('click',()=>{
    getMovieData();
})