/*
Exercise 1:
Read about the Array.prototype.sort method. 

Create a function that can be used with sort. 

This function should take two strings, and return a value that sort can use to determine which is the longest string. 

Finally, create an array of strings and try to get it sorted using your new function.
*/

function retLongestString (str1, str2) {
    
    var arr = [str1, str2];
    arr = arr.sort(compare);
    
    return arr[0];
}

function compare (a,b) {
    
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



var people = [
    {name : "Jerry", email : "sjerry@tv.com"},
    {name : "Georgesdfsdf", email : "dgeorge@tv.com"},
    {name : "Elainesdf", email : "xelaine@tv.com"},
    {name : "Kramersdfsd", email : "tkramer@tv.com"}
    ]

function compareObjectName (a,b) {
    
    if (a.name.length >= b.name.length) {
        return -1;
    }
    else {
        return 1;
    }
}

function compareObjectEmail (a,b) {
    
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
Create a function that can be used with Array.prototype.map. 

This function should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result.
*/
