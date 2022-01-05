import Galactic from "../src/js/galactic.js"

describe('Galactic', () => {
  let galactic;
  beforeEach(() =>{
    galactic = new Galactic(30,2,2,2);
  });
  test('should correctly create an object with four properties', () => {
    expect(galactic.age).toEqual(30);
    expect(galactic.smoking).toEqual(2);
    expect(galactic.health).toEqual(2);
    expect(galactic.exercise).toEqual(2);
  });
  test('should correctly determine ages in planets Earth, Jupiter, Venus, Mercury, Mars', () => {
    expect(galactic.planetAges()).toEqual([30, 16, 125, 49, 3]);
  }); 
});