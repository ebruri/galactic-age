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
  test('should correctly determine age in Mars', () => {
    expect(galactic.marsAge()).toEqual(16);
  }); 
  test('should correctly determine age in Mercury', () => {
    expect(galactic.mercuryAge()).toEqual(125);
  }); 
  test('should correctly determine age in Venus', () => {
    expect(galactic.venusAge()).toEqual(49);
  }); 
  test('should correctly determine age in Jupiter', () => {
    expect(galactic.jupiterAge()).toEqual(3);
  }); 
  test('should correctly determine how many years a user has left to live', () => {
    expect(galactic.yearsToLive(72)).toEqual(60);
  }); 
});