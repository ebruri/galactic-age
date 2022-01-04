import Galactic from "../src/js/galactic.js"

describe('Galactic', () => {
 test('should correctly create an object with four properties', () => {
    const galactic = new Galactic(30,2,2,2);
    expect(galactic.age).toEqual(30);
    expect(galactic.smoking).toEqual(2);
    expect(galactic.health).toEqual(2);
    expect(galactic.exercise).toEqual(2);
  }); 
});