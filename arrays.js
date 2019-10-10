/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//arrays
var names = ['anusha','ramya','shailaja','ravindra'];
var years = [3,3,3,3];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(years);
console.log(years[1]);


var detail = ['anusha',1997,22,false,'employee'];
console.log(detail);

detail.push('red')// add element to the end
detail.unshift("miss");//add element to the begining
console.log(detail);
detail.pop();//remove last element
console.log(detail);
detail.shift();// remove 1st element from the array
console.log(detail);
var i=detail.indexOf(22);//get index
console.log(i);

if(detail.indexOf('student') === -1)
{
    console.log("NOT a student");
}

// if(detail.indexOf('emploee'))