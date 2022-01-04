export default class Galactic {
  constructor(age, smoking, health, exercise) {
    this.age = age;
    this.smoking = smoking;
    this.health = health;
    this.exercise = exercise;
  }
  marsAge() {
    return Math.round(this.age / 1.88);
  }
}  