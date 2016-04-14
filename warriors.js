/*
Create a constructor function called Warrior that can create new warriors. 

This function will take parameters name, and gender. name can be any string, gender can be M or F. It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100
In addition to that, every object that gets created should have the following methods:
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, this method should output to the console which player won the fight based on their power. Be as creative as you like with the text of this method :)
Finally, create a bunch of warriors and make them fight together



*/

function Warrior (name,gender) {
    return {
        name : name,
        gender : gender,
        level: 1,
        weapon: "wooden sword",
        power: Math.floor((Math.random() * 100) + 1),
        fight: fight,
        faceoff: faceoff
    };
    
}

function faceoff(opponent) {
    if (opponent.power > this.power) {
        return opponent.name + " wins!";
    }
    else if (opponent.power < this.power) {
        return this.name + " wins!";
    }
    else {
        return "It's a tie";
    }
}

function fight() {
    console.log(this.name + " rushes in the arena with  " + this.weapon);
}



/*
var Mario = Warrior("Mario","M");
var Luigi = Warrior("Luigi","M");
var Princess = Warrior("Princess","F");

Mario.fight();
Princess.fight();

console.log(Mario.faceoff(Princess));
console.log(Luigi.faceoff(Princess));
*/

