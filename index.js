const process = require('process');
const argv = process.argv.slice(2);

const {fetchBreedDesc} = require('./breedFetcher');

fetchBreedDesc(argv, (error, desc)=> {
  if (error) {
    console.log(`Error:\n${error}`);
  } else {
    console.log(desc);
  }
});