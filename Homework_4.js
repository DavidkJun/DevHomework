/*
class Vector {
  constructor(components) {
    this.components = components;
  }

  add(otherVector) {
    if (this.components.length !== otherVector.components.length) {
      throw new Error("Vectors must have the same length ");
    }

    const result = this.components.map((value, index) => value + otherVector.components[index]);
    return new Vector(result);
  }

  subtract(otherVector) {
    if (this.components.length !== otherVector.components.length) {
      throw new Error("Vectors must have the same length ");
    }

    const result = this.components.map((value, index) => value - otherVector.components[index]);
    return new Vector(result);
  }

  dot(otherVector) {
    if (this.components.length !== otherVector.components.length) {
      throw new Error("Vectors must have the same length ");
    }

    const result = this.components.reduce((acc, value, index) => acc + value * otherVector.components[index], 0);
    return result;
  }

  norm() {
    const sumOfSquares = this.components.reduce((acc, value) => acc + value ** 2, 0);
    return Math.sqrt(sumOfSquares);
  }

  toString() {
    return `(${this.components.join(',')})`;
  }

  equals(otherVector) {
    if (this.components.length !== otherVector.components.length) {
      return false;
    }
    return this.components.every((value, index) => value === otherVector.components[index]);
  }
 */
/*
class Warrior{
  constructor(){
   this.lvl = 1 ;
   this.warrior_rank = "Pushover";
    this.warrior_ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    this.warrior_experiance = 100;
    this.warrior_achievements =[];
      }
   level(){

    this.lvl = Math.floor(this.warrior_experiance/100);
    if(this.lvl > 100){this.lvl = 100};
    return this.lvl;
  }
  rank(){
   return this.warrior_ranks[Math.floor(this.lvl/10)];

  }


  experience(){

    if(this.warrior_experiance > 10000){ this.warrior_experiance = 10000};
   return this.warrior_experiance;

  }

  achievements(){
    return this.warrior_achievements;

  }
  training([name_achievement,enemy_exp,minlvl]){
    if(this.lvl >= minlvl){
      //brake point
      this.warrior_achievements.push(name_achievement);
      this.warrior_experiance += enemy_exp;
      this.update()
      return name_achievement;
      }
     else{

      return "Not strong enough";

   }

}

  battle(enemy_level){
        if ( enemy_level<= 0 || enemy_level > 100) {
      return "Invalid level";
    }
    if (enemy_level+1 < this.lvl) {
      return "Easy fight";
    }
    if (enemy_level+1 == this.lvl) {
      this.warrior_experiance += 5;
      this.update()
      return "A good fight";
    }
    if (enemy_level == this.lvl) {
      this.warrior_experiance += 10;
      this.update()
      return "A good fight";
    }
    if (Math.floor(this.lvl/10) < Math.floor(enemy_level/10) && enemy_level > this.lvl+4) {
      return "You've been defeated";
    }
    if (enemy_level > this.lvl) {
      this.warrior_experiance += 20 * (enemy_level-this.lvl)**2;
      this.update();
      return "An intense fight";
    }
  }
  update(){
   this.level();
   this.experience();
   this.rank();
  }
}

 */
/*
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (pageIndex >= 0 && pageIndex < this.pageCount()) {
      if (pageIndex === this.pageCount() - 1) {
        return this.collection.length % this.itemsPerPage || this.itemsPerPage;
      } else {
        return this.itemsPerPage;
      }
    } else {
      return -1;
    }
  }

  pageIndex(itemIndex) {
    if (itemIndex >= 0 && itemIndex < this.itemCount()) {
      return Math.floor(itemIndex / this.itemsPerPage);
    } else {
      return -1;
    }
  }
}
 */
