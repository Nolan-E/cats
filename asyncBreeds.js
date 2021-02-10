// IMPORT MODULES
const fs = require('fs');

// FUNCTION IMPLEMENTATIONS
const breedDetailsFromFile = (breed, runWhenDone) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data. ");
    if (!error) runWhenDone(data);
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
};

const bombay = breedDetailsFromFile('Bombay', printOutCatBreed);