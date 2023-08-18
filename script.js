function describe(key, value) {
    let sentance;
    if (key == "fireplace") {
        if (value == "true") {
            sentance = `and it includes a fireplace. `;
        } else {
            sentance = " "
        }  
    }
    if (key == "rooms") {
        sentance = `${value} bedrooms, `;
    }
    if (key == "type") {
        sentance = `${value} `;
    }
    if (key == "color") {
        sentance = `What we have here is a ${value} `;
    }
    if (key == "floors") {
        sentance = `${value} floors, `;
    }
    if (key == "bedrooms") {
        sentance = `${value} bedroom(s), `
    }
    if (key == "bathrooms") {
        sentance = `${value} bathroom(s), `;
    }
    if (key == "address") {
        sentance = `And it's located at: ${value}.`;
    }
    return sentance;
  }

import data from './data.json' assert { type: 'json' };
let compiled = null
let wordG;
Object.entries(data).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
    wordG = describe(key, value)
    if (compiled == null) {
        compiled = wordG
    } else {
        compiled = compiled.concat(wordG)
    }
});
console.log(compiled)
const descriptionParagraph = document.getElementById('description');
descriptionParagraph.textContent = compiled;