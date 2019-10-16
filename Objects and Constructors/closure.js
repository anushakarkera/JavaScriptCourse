//*********************************************************************************
//Closure in JS:-- Inner functions can access the variables of outer function event after control from outer function returns. 
//this is because variables of (scope chain) outer function is not removed from memory even though execution context of outer function gets deleted.
//Hence inner function can access outer function variables
//anonymous function
function retirement(retirementAge){
    var a = 'years left until retirement.';
    return function(yearOfBirth)//adds exe context and removes exe context of outer function ,but not variables
    {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);//adds exe context
retirementUS(1990);//removes exe context of inner function

retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);



//******************************************************************************
//Closure Challenge

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', con you please explain what UX design is?');
        }else if(job === 'teacher')
        {
            console.log('what subject do you teach,' + name + '?');
        }else
        {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('john');


//*****************************************************************************************************
//Bind , Call , Apply

var john = {
    name : 'John',
    age : 20,
    job : 'teacher',
    presentation : function(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good '+ timeOfDay + ', Ladies and Gentle men ! I\'m '+ this.name + ', i\'m a ' + this.job + 'and I\'M '+this.age + 'years old.');
        }else if(style === 'friendly'){
            console.log('Hey: What\'s up? I\'m '+ this.name + ', i\'m a ' + this.job + 'and I\'M '+this.age + 'years old. Have a nice ' + timeOfDay + '.')
        }
    }
}


var emily = {
    name : 'Emily',
    age : 29,
    job : 'designer'
};

john.presentation('formal','morning');
//call method takes this as its first arg
john.presentation.call(emily,'friendly','afternoon')//sets this in presentaion function to emiley object.
// john.presentation.apply(emily,['friendly','afternoon'])
var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');




var years = [1973,1897,1837,2908,2097];
function arrayCalc(arr , fn)
{
    var arrRes = [];
    for(var i=0;i<arr.length;i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}


function isFullAge(limit, el){
    return (el >= limit);
}

var age = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);