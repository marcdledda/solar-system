console.log("JS TEST");

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(function(planets) {
    document.getElementById("planets").innerHTML += (planets + " || ");
});

const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

console.log("Lowercase:")
console.log(planets);

let upperPlanet = planets.map(function(word){
    return (word.charAt(0).toUpperCase() + word.slice(1));
});

console.log("Uppercase:")
console.log(upperPlanet);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let filterPlanets = planets.filter(function(word) {
    return (word.toString().includes("e"));
});

console.log("Reduced:");
console.log(filterPlanets);

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let combineWords = words.reduce(function(word1, wordTogether) {
    return (word1 + " " + wordTogether);
});

console.log("Combined Array:")
console.log(combineWords);