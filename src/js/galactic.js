export default class Galactic {
  constructor(age, smoking, health, exercise) {
    this.age = age;
    this.smoking = smoking;
    this.health = health;
    this.exercise = exercise;
  }
  planetAges() {
    const ages = [];
    ages.push(Math.ceil(this.age), Math.ceil(this.age / 1.88), Math.ceil(this.age / 0.24), Math.ceil(this.age / 0.62), Math.ceil(this.age / 11.86));
    return ages; 
  }
  yearsToLive() {
    let average =[72, 39, 300, 117, 7];
    let healthPoint = this.smoking + this.health + this.exercise;
    let ages = this.planetAges();
    console.log(ages);
    let yearsLeft = [];
    for (let i = 0; i < average.length; i++) {
      if (healthPoint >= 5) {
        yearsLeft.push(Math.ceil(average[i]/4 + average[i] - ages[i]));
      } else if (healthPoint === 3 || healthPoint === 4) {
        yearsLeft.push(Math.ceil(average[i]/8 + average[i] - ages[i]));
      } else {
        yearsLeft.push(Math.ceil(average[i] - average[i]/10 - ages[i]));
      }
    } 
    return yearsLeft;
  }
}  