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
  yearsToLive(avAge) {
    let healthPoint = this.smoking + this.health + this.exercise;
    if (healthPoint >= 5) {
      return Math.ceil(avAge/4 + avAge - this.age);
    } else if (healthPoint === 3 || healthPoint === 4) {
      return Math.ceil(avAge/8 + avAge - this.age);
    } else {
      return Math.ceil(avAge - avAge/10 - this.age);
    }  
  } 
}  