const { fetchBreedDesc } = require('../breedFetcher');
const { assert } = require('chai');


describe('This is a test for the breedFetcher function which looks up a user-inputted cat breed and returns a description', () =>{
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDesc('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('return an error and desc should be null/undefined', (done) => {
    fetchBreedDesc('The Blue Man Group', (err, desc) => {
      // we expect no error for this scenario
      const expectedErr  = `Sorry! The cat was not found.`;
      
      assert.equal(err, expectedErr);
      assert.equal(desc, null);

      done();
    });
  });








});