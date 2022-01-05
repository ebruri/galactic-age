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
}  