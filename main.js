/**
 * Karim Shaloh
 * email
 * date
 */

const data = require('./data.js');

const characters = data.characters;

function printChars() {
  characters.forEach((character) => {
    console.log(character);
  });

  let chars = characters.filter((char) => {
    return char.race[0] !== 'S';
  });
  console.log(chars);

  chars.sort((a, b) => {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    return 0;
  });
  console.log(chars);
}

printChars();
