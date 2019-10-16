var john = {
    name : 'John',
    yearOfBirth: 1990,
    job : 'teacher'
};

var Person = function(name,
    yearOfBirth,job){
        //this points to object created by new not john object
        //now this new object gets 3 properties
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        
    }

Person.prototype.calculateAge = this.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
};

//NOTE:- new operator makes empty object created initially to point to object(hence this.name is aaa )
var john = new Person('John',1990,'teacher');//new empty objects is created and constructor function(Person) is called (creates new execution funct with this) 




var jane = new Person('Jane',1998,'developer');
var mark = new Person('Mark',1934,'retired');
console.log(Person);
console.log(john);
console.log(jane);
console.log(mark);

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
