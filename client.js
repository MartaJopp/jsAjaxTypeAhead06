console.log('sourced');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//fetch returns the promise/what comes back
//blob needs to be converted from raw data to json
fetch(endpoint)
    .then(blob => blob.json())
    //...spreads the array so pushes each separately es6
    .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //here we need to figure out if it matches what was searched
        //g is global i is case insensitive
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayMatches() {
const matchArray = findMatches(this.value, cities)
console.log(matchArray)

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)