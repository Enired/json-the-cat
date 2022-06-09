const process = require('process');
const argv = process.argv.slice(2);

const {fetchBreed} = require('./breedFetcher');

fetchBreed(argv, (error, desc)=> {
  if (error) {
    console.log(`Error:\n${error}`);
  } else {
    console.log(desc);
  }
});