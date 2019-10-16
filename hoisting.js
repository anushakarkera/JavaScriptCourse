


//calculateAge(1998); // valid 



function calculateAge(year)
{
    console.log(2019-year);
}

calculateAge(1998); // valid even if this is called before function definition.

//does not work for function expressions
retirement(1990); //does not work


var retirement = function(year){
    console.log(65 - (2016 - year))
}

retirement(1990);

console.log(age);
var age = 23;


function foo(){
    var age = 65;
    console.log(age);
}


foo();
console.log(age);

