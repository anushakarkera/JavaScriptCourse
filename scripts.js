// console.log("diffrent file");




// var name="anu";
// console.log(name);
// var lastName="sha"
// console.log(lastName)
// var age=22;
// console.log(age);
// var flag=true;
// console.log(flag)



// // var name="anu";
// var age=22;
// console.log(name + age)
// //main note :---
// console.log(age + age);
// //outputs:--- 44 (not 22 22)
// var job,married;
// console.log(job);//undefined
// job = 'teacher';
// married = false;



// console.log(name +' '+age+' '+job+' '+married);
// age = 'anusha'; //valid since age is declared as var
// console.log(age);
// var nickName = prompt('what is your nickname');
// console.log(nickName);
// alert(name +' '+age+' '+job+' '+married+' '+nickName);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//operators:
//Operator precedence (JS) refer links: codingheroes.io/resources
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence




// var now = 2019;
// var birthyear = now - 22;
// console.log(birthyear);
// birthyear = now - 22 * 2; // (operator precedence)
// console.log(birthyear);

// newAge = myAge = (3 + 2) * 4 - 6; // (),*,-
// console.log(myAge);// o/p :- 14
// console.log(newAge);// o/p :- 14  newAge is not declared

// myAge++; 
// console.log(myAge);
// myAge *= 2;
// console.log(myAge); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// If else:
// var name = "anusha";
// var age = 22;
// var isMarried = 'no';
// if (isMarried == 'yes')
//     console.log(name + " is " + "married");
// else
//     console.log(name + " is " + "unmarried")




// isMarried = false;
// if(isMarried)
// {
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }



// // difference b/w ==  and  ===
// if(23 == "23") //returns true
//     console.log("equal")

// if(false == "false")  //returns false
//     console.log("equal")
// console.log(false=="false") // o/p :- false


// if(23 === "23")
//     console.log("equal")
// else
//     console.log("unequal");



// // boolean logic and switch
// var age = 10;
// if(age < 14)
//     console.log("age is lesser than 14");
// else if(age > 14)
//     console.log("age is greater than 14");
// else
//     console.log("age is equal to 14");




// var age = 25;
// if(age < 20)
//     console.log("John is teenager");
// else if(age >= 20 && age < 30)
//     console.log("John is young man");
// else
//     console.log("John is man");




// var job = "";

// job = prompt("what does John do?");

// switch(job)
// {
//     case "teacher":
//         console.log("John is a teacher");
//         break;
//     case "engineer":
//         console.log("John is an engineer");
//         break;
//     case "doctor":
//         console.log("John is a doctor");
//         break;
//     default:
//         console.log("John does something else");
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Simple game:
var player1Height = 100;
var player1Age = 20;
var player2Height = 134;
var player2Age = 27;

var player1Score = player1Height + 5 * player1Age;
var player2Score = player2Height + 5 * player2Age;

if(player1Score > player2Score)
    console.log("player 1 wins with "+player1Score);
else if(player1Score < player2Score)
    console.log("player 2 wins with "+player2Score);
else
    console.log("there is a draw");



//adding an extra player

var player3Height = 500;
var player3Age = 20;
var player3Score = player3Height + 5 * player3Age;


if(player1Score > player2Score && player1Score > player3Score)
    console.log("player 1 wins with "+player1Score);
else if(player2Score > player1Score && player2Score > player3Score)
    console.log("player 2 wins with "+player2Score);
else if(player3Score > player1Score && player3Score > player2Score)
    console.log("player 3 wins with "+player3Score);
else
    console.log("there is a draw");