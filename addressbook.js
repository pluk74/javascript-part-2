/*
Create a file called addressbook.js, then do the following. Commit and push as often as you like so that we can monitor the progress of your work in the pull request.

Create a constructor function called Person that can create new persons. It takes firstName and lastName as arguments, and assigns them to the new object. In addition to that, the constructor function will assign each person an emails property that will be an empty array.

Create a constructor function called Email that can create a new email address. It takes address and type as arguments. It will assign address to the new object. For type, check if it's in the list (work, home, other). If it's not in the list, set the type to "other".
Add an addEmail function to the prototype of Person. This function will be available to all objects created using new Person. The addEmail function should take an email address and type as arguments, call the Email constructor to create a new email object, then push that email object to the emails of the person.
Finally test your code by creating a person and giving them a home and work email.


function Fighter(name) {
    this.name = name;
    this.level = 1;
    this.weapon = "wooden sword";
    this.friends =  [];
    this.achievements = [];
}
*/

//Person constructor
function Person (fName, lName) {

        this.firstName = fName;
        this.lastName = lName;
        this.emails = [];
      
    
}

function Email  (address,type) {
            this.address = address;
            this.type = EmailType(type);
            }

//function to return email type
function EmailType (type)
{
    if (type === "home" || type === "work") {
        return type;
    }
    else {
        return "other";
    }
}

/*

Add an addEmail function to the prototype of Person. This function will be available to all objects created using new Person. The addEmail function should take an email address and type as arguments, call the Email constructor to create a new email object, then push that email object to the emails of the person.
*/

Person.prototype = {
    addEmail: function(eMailAddress,type) {
        var newMsg = new Email(eMailAddress,type);
        this.emails.push(newMsg);
        
    }
    
    
}


var patrick = new Person("Patrick", "Luk");

//patrick.Email("pluk@email.com","home");
patrick.addEmail("george@email.com","work");

console.log(patrick);


