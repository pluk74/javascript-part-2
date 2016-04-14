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