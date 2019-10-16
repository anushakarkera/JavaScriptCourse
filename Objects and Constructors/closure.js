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