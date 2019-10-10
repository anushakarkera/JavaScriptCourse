//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Objects and property

var detail =
{
    name:"anusha",
    age: 22,
    dob:"17/06/1997",
    isMarried: false,
    qualification: "engineer",
    job:"developer"
};

console.log(detail);
console.log(detail['name']);//key in quotes
console.log(detail.job);

var x = "dob";
console.log(detail[x]);

detail.name = "ANUSHA";
detail.job = "programmer";

console.log(detail);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creating objects using new operator

var details = new Object();

console.log(details); //{} empty
details.name = "anusha";
details.age = 10;

console.log(details.name);
console.log(details['name']);

details.age=100;
console.log(details['age']);

console.log(details)






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Objects and methods



var details =
{
    name:"anusha",
    age: 22,
    dob:"17/06/1997",
    isMarried: false,
    qualification: "engineer",
    job:"developer",
    family : ['ramya','ravindra','shailaja'],
    calculateAge: function yearOfBirth(year){
        return 2019-year;
    }
};


console.log(details);
console.log(details.family);
console.log(details.family[1]);
console.log(details.calculateAge(1997));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//using this


var details1 =
{
    name:"anusha",
    dob:"17/06/1997",
    isMarried: false,
    qualification: "engineer",
    job:"developer",
    yearOfBirth:1997,
    family : ['ramya','ravindra','shailaja'],
    calculateAge: function yearOfBirth(){
        return 2019-this.yearOfBirth;
    }
};


console.log(details1.calculateAge());

var age = details1.calculateAge();
details1.age = age;

console.log(details1);








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// optimised object


var details2 =
{
    name:"anusha",
    dob:"17/06/1997",
    isMarried: false,
    qualification: "engineer",
    job:"developer",
    yearOfBirth:1997,
    family : ['ramya','ravindra','shailaja'],
    calculateAge: function yearOfBirth(){
        this.age = 2019-this.yearOfBirth;
    }
};


details2.calculateAge();
console.log(details2);