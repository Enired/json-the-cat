const request = require('request');
const process = require('process')
const argv = process.argv.slice(2);

const fetchBreed = (argv) => {
  if(argv.length !== 0){
    breed = argv.join('%20')
    
    request(`http://api.thescatapi.com/v1/breeds/search?name=${breed}`, (err,response,body) =>{
      //Returning Error Results
      if(err){
        return console.log(err)
      }
      //For Returning Body Results
      body = JSON.parse(body);
      const catData = body[0]
      if(catData){
        const catDesc = catData.description
        console.log(catDesc)  
      }
      else{
        console.log('Sorry! The cat was not found.')
      }
    });

  }
  // For handling case if user does not enter a cat to search for
  else{
    console.log('Please enter a cat to search for.')
  }

}

fetchBreed(argv)


