export default class Galactic {
  constructor(age, smoking, health, exercise) {
    this.age = age;
    this.smoking = smoking;
    this.health = health;
    this.exercise = exercise;
  }
  marsAge() {
    return Math.ceil(this.age / 1.88);
  }
  mercuryAge() {
    return Math.ceil(this.age / 0.24);
  }
   venusAge() {
    return Math.ceil(this.age / 0.62);
  }
  jupiterAge() {
    return Math.ceil(this.age / 11.86);
  }
}  