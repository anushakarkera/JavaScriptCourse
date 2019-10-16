var personProto = {
    calculateAge:function(){
        console.log(2016-this.yearOfBirth);
    }
};

var john1 = Object.create(personProto);
john1.name = 'JOHN';
john.yearOfBirth = 1998;
john.job = 'teacher';

var jane1 = Object.create(personProto,
    {
        name: { value:'Jane'},
        yearOfBirth: { value:1997},
        job: { value : 'developer'}
    });

//primitives and objects

var a = 23;
var b = a;
a=46;
console.log(a);
console.log(b);


var obj1 = {
    name : 'John',
    age : 20
};
var obj2 = obj1; //copy reference
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


//functions


var age = 27;
var obj = {
    name : 'Johnas',
    city : 'Lisbon'
};

function change(a,b){
    a = 30;
    b.city = 'San Francisco';
}

//reference of object is passed to function
//simple copy is created when primitive is passed to function
change(age,obj);

console.log(age); //o/p:- 27
console.log(obj.city)// o/p:- San Francisco




//passing function to another function
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


function isFullAge(el){
    return (el >= 18);
}

function maxHeartRate(el)
{
    if(el >= 10 && el <=81)
    {
        return Math.round(206.9 - (9.67 * el));
    }
   else
   {
       return -1;
   }
}


var ages=arrayCalc(years , calculateAge);
var fullAges = arrayCalc(ages , isFullAge);
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);



//***********************************************************************************
//returning function
function interviewQuestion(job)
{
    if(job === 'designer')
    {
        return function(name){
            console.log(name + ', con you please explain what UX design is?');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('what subject do you teach,' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');


//interviewQuestion is called with 'teacher' as arguement returned function gets 'mark' as a argument
interviewQuestion('teacher')('mark');






//******************************************************************************************************************
//IIFE :- Immediately Invoked Function Expressions
//goal :- hide the score
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
// console.log(score);//error since scope of score ended





//Above code can be written in better way
//anonymous function
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();//() ccall itself

//console.log(score);//error


(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);//(5) passing argument



