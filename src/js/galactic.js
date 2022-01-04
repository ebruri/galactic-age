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
  yearsToLive(average, age) {
    let healthPoint = this.smoking + this.health + this.exercise;
    if (healthPoint >= 5) {
      return Math.ceil(average/4 + average - age);
    } else if (healthPoint === 3 || healthPoint === 4) {
      return Math.ceil(average/8 + average - age);
    } else {
      return Math.ceil(average - average/10 - age);
    }  
  } 
}  