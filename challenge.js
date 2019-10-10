





function printFullAge(years){
    var ages=[];
    var fullAges=[];
for (var i=0;i<years.length;i++)
{
    ages[i]=2019-years[i];
}


for (var i=0;i<ages.length;i++)
{
    if(ages[i]>=18)
    {
        console.log("person "+(i+1)+" is " + ages[i] + " years old, and is of full age");
        fullAges.push(true);
    }
    else
    {
        console.log("person "+(i+1)+" is "+ ages[i] + " years old, and is not of full age");
        fullAges.push(false);
    }
}
return fullAges;
}

var years=[2019,1996,1575,1996,2863,2006];
var fullage1=printFullAge(years);
var fullage2=printFullAge([2015,2020,1987,1826,1990]);
console.log(fullage1);
console.log(fullage2);