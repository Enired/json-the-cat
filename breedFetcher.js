const request = require('request');
//Assisted by Cal and Dan from East Coast May 30th, 2022 cohort.
const fetchBreed = (breed, cb) => {
  if (breed.length !== 0) {
    breed = breed.join('%20');
    request(`http://api.thecatapi.com/v1/breeds/search?name=${breed}`, (err,response,body) =>{
      //Returning Error Results
      if (err) {
       return cb(err);
      }
      //For Returning Body Results
      body = JSON.parse(body);
      const catData = body[0];
      if (catData) {
        const catDesc = catData.description;
        return cb(null, catDesc);
      } else {
        return cb('Sorry! The cat was not found.');
      }
    });
  } else {// For handling case if user does not enter a cat to search for
    return cb('Please enter a cat to search for.');
  }
};





module.exports = {fetchBreed}
