/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

class GameObject {
  constructor (attributes) {
    this.createdAt = attributes.createdAt
    this.dimensions = attributes.dimensions
  }

  destroy() {
    return `${this.name} was removed from the game.`
  }

}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
  constructor (attributes) {
    super(attributes)
    this.healthPoints = attributes.healthPoints
    this.name = attributes.name
  }
  takeDamage() {
    return `${this.name} took damage.`
  }
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes)
    this.team = attributes.team
    this.weapons = attributes.weapons
    this.language = attributes.language
    this.attackPoints = attributes.attackPoints
    this.specialAttack = attributes.specialAttack
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}


// Test your work by un-commenting these 3 objects and the list of console logs below
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

/*
  === Villain ===
  Attributes:
  * affliation: 'Villain

 Prototype Functions:
  * warCry()
  * fireballThrow()
*/

class Villain extends Humanoid {
  constructor (attributes) {
    super(attributes)
    this.affliation = 'Villain'
  }

  warCry() {
    return `${this.affliation}s will conquer the world!`
  }

  //Add an attack method
  fireballThrow(opponent) {
    opponent.healthPoints = opponent.healthPoints - this.attackPoints
  }
}

/*
  === Hero ===
  Attributes:
  * affliation: 'Hero'

 Prototype Functions:
  * battleCry()
  * swordStrike()
*/

class Hero extends Humanoid {
  constructor (attributes) {
    super(attributes)
    this.affliation = 'Hero'
  }

  battleCry() {
    return `${this.affliation}es will save the world, YO JOE!!!`
  }
  //Add an attack method
  swordStrike(opponent) {
    opponent.healthPoints = opponent.healthPoints - this.attackPoints
  }
}

const sorcerer = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Raistlin',
  team: 'Wizard of High Sorcery',
  weapons: [
    'Staff of Magius',
  ],
  language: 'Common Tongue',
  attackPoints: 2,
  specialAttack: 'fireball spell'
});

const warrior = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Caramon',
  team: 'Heroes of the Lance',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
  attackPoints: 3,
  specialAttack: 'sword strikes'
});

//Background story
const backStory = (character) => {
  return `${character.name}, a ${character.affliation} and member of the \"${character.team}\"`
}
console.log(`We begin our journey with ${backStory(sorcerer)}; and with ${backStory(warrior)}.`)

//Battle Sequence
const combat = (character, opponent) => {
  // Choose character attack
  const attack = () => {
    if (character.affliation === 'Villain') {
      character.fireballThrow(opponent)
    } else {
      character.swordStrike(opponent)
    }
  }

  // Execute attack
  let motto = character.affliation === 'Villain' ? character.warCry() : character.battleCry()
  attack()

  // Show combat play by play and battle status
  if (opponent.healthPoints <= 0) {
    return `${character.name} shouts \"${motto}\" ${character.name} uses ${character.specialAttack} to defeat ${opponent.name}! ${opponent.destroy()}`
  } else {
    return `${character.name} shouts \"${motto}\" ${character.name} uses ${character.specialAttack} to attack ${opponent.name}. Leaving him with ${opponent.healthPoints} health points.`
  }
}

console.log(combat(sorcerer, warrior))
console.log(combat(warrior, sorcerer))
console.log(combat(warrior, sorcerer))





