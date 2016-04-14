/*
Create a constructor function called Tile that can create new tiles. This function will take parameters x and y and create an object that has these properties:
x: the value that was passed to the constructor
y: the value that was passed to the constructor
height: a random number between 1 and 3
type: a random word between grass, rocks or water
condition: a random word between burning, normal or frozen
In addition to that, every object that gets created should have the following methods:
freeze: if the object is burning, then its condition should change to normal. if the object is normal then its condition should change to frozen and if it is frozen, its height should increment by 1
burn: if the object is frozen, then it will become normal. if the object is normal, then it should change to burning. if it is already burning, then its height should decrement by 1 until it gets to 0.
Write a piece of code that will use the Tile constructor to create a 20x20 map of Tiles. The map will be a 2D array (array inside array).
Output the map to the console in the following way:
For each tile, output the height of the tile as an "icon" for that tile
Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again

*/

function Tile (x,y) {
    
    this.x = x;
    this.y = y; 
    this.height = getRandomInt(1,3);
    this.type = randomType("type");
    this.condition = randomType("condition");
    this.freeze = function () {
        this.condition = "frozen";
    }
    this.burn = function () {
        this.condition = "normal";
    }
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//type: a random word between grass, rocks or water
//condition: a random word between burning, normal or frozen
function randomType(propertyName) {
    
    var type = ["grass","rocks","water"];
    var condition = ["burning","normal","frozen"];
    
    if (propertyName === "type") {
        return type[getRandomInt(0,2)];
    }
    else if (propertyName === "condition") {
        return condition[getRandomInt(0,2)];
    }
    
}





Tile.prototype = {
    
}

var x = randomType("condition");
var thing = new Tile(2,3);
console.log(thing);
thing.freeze();
console.log(thing);