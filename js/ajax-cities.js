const ulr = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(ulr)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi');

        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        return `
        <li>
        <span class="name">${place.city}, ${place.state}</span>
        </li>
        `
    }).join();

    suggest.innerHTML = html;
}

const suggest = document.querySelector('.suggest');
const inputSearch = document.querySelector('.search');

inputSearch.addEventListener('change', displayMatches);
inputSearch.addEventListener('keyup', displayMatches);