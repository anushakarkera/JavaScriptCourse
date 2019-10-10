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


