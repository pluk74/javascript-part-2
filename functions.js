/*
Exercise 1:
Read about the Array.prototype.sort method. 

Create a function that can be used with sort. 

This function should take two strings, and return a value that sort can use to determine which is the longest string. 

Finally, create an array of strings and try to get it sorted using your new function.
*/

function retLongestString(str1, str2) {

    var arr = [str1, str2];
    arr = arr.sort(compare);

    return arr[0];
}

function compare(a, b) {

    if (a.length >= b.length) {
        return -1;
    }
    else {
        return 1;
    }
}

//console.log(compare("asdfsadfds","wrewaresraeraersrf"));
//console.log(retLongestString("chrysanthemum","alaj"));

/*
Exercise 2:
Create an array of objects (don’t need to use new here, just regular object literals). 

These objects will contain a name and email property. 
Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail address in alphabetical order.
*/



var people = [{
    name: "Jerry",
    email: "sjerry@tv.com"
}, {
    name: "Georgesdfsdf",
    email: "dgeorge@tv.com"
}, {
    name: "Elainesdf",
    email: "xelaine@tv.com"
}, {
    name: "Kramersdfsd",
    email: "tkramer@tv.com"
}]

function compareObjectName(a, b) {

    if (a.name.length >= b.name.length) {
        return -1;
    }
    else {
        return 1;
    }
}

function compareObjectEmail(a, b) {

    if (a.email >= b.email) {
        return 1;
    }
    else {
        return -1;
    }
}


people = people.sort(compareObjectEmail);

//console.log(people);

/*
Exercise 3: 
Create a function that can be used with Array.prototype.map. 

This function should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result.
*/


function squared(x) {

    return x * x;
}

var arr = [3, 4, 6, 7];
var arrsq = arr.map(squared);
//console.log(arrsq);


/*
Exercise 4: 
Create a function that can be used with Array.prototype.map. 

This function should be able to take an object and square its “num” property. 

Then, use this function with map on an array of objects each containing a “num” property.
*/

var arrObj = [{
    num: 3
}, {
    num: 5
}, {
    num: 1
}, {
    num: 9
}]

function squaredNumInObj(x) {

    return x.num * x.num;
}

function squareArrProp(arr) {

    var arrObj2 = arr.map(squaredNumInObj);

    return arrObj2;

}

//console.log(squareArrProp(arrObj));

/*
Exercise 5: 
In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) and returned the result of the operation on the two numbers. 

Here we are going to do the same but at a higher order. 

Create a function called operationMaker that takes only a string called operation as argument. 

This string could be “add”, “subtract”, “mult” or “div”. 
Your function will return a function that will take two numbers and return the result of running operation on these numbers. 
The end result should let me do something like this:


var adder = operationMaker(“add”);
var sum = adder(5, 10); //15

var multiplier = operationMaker(“mult”);
var product = mult(5, 10); // 50



*/


function operationMaker(operation) {

    switch (operation) {
        case "add":
            return adding;
        case "subtract":
            return subtractor;
        case "mult":
            return multipliers;
        case "div":
            return divider;
        default:
            return "try again!"

    }
}


function adding(x, y) {
    return x + y;
}

function multipliers(x, y) {
    return x * y;
}

function subtractor(x, y) {
    return Math.abs(x - y);
}

function divider(x, y) {
    if (y != 0) {
        return x / y;
    }
    else {
        return "cannot divide by zero!";
    }
}

var adder = operationMaker("add");
var sum = adder(5, 10); //15

var mult = operationMaker("mult");
var product = mult(5, 10); // 50

//console.log("sum: " + sum);
//console.log("product: " + product);
