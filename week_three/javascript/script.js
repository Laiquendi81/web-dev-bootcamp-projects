// alert("This is an alert");

// //Prompt
// let name = prompt("What is your name?");
// console.log(name);

//Confirm
// let deletePost = confirm("Do you really want to delete this post?");

// if(deletePost) {
//     console.log("Your post has been deleted");
// } else {
//     console.log("Your post has not been deleted");
// }

//Twitter character length example
// var tweet = prompt("Compose your tweet");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters, you have " + (240 - tweetCount) + " characters remaining");

//String slice
// var tweet = prompt("Compose your tweet");
// var tweetUnder140 = tweet.slice(0,140);
// alert(tweetUnder140);

//change cases in text
// var name = "Jenni McCarthy";
// name = name.toUpperCase();

// //Exercise 1 - Greet using uppercase
// var userName = prompt("What is your name?");
// var firstLetter = userName.slice(0,1);
// var capitalised = firstLetter.toUpperCase();
// var remainingLetters = userName.slice(1)
// alert("Hi, " + capitalised + remainingLetters);
// console.log(remainingLetters);

//swap variable values
// var a = "3";
// var b = "8";

// if (a == "3" && b =="8") {
//     a = "8";
//     b = "3";
// } else {
//     console.log("Not this time!");
// }

// console.log(a,b);

//BMi Calculator

function bmiCalc(weight, height) {
    let heightSq = height * height;
    // console.log(heightSq);
    let userBMI = Math.round(weight/heightSq);
    // console.log(userBMI);
    return userBMI;
}



// var calculatedBMI = bmiCalc(65, 1.8);
var calcBMI = bmiCalc(60, 1.8);

//BMI message

function bmiMessage(bmi) {
    if(bmi < 18.5) {
        return "Your BMI is " + bmi + ", you are underweight";
    } else if (bmi > 18.5 && bmi < 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight";
    } else {
        return "Your BMI is " + bmi + ", you are overweight";
    }
}

console.log(bmiMessage(calcBMI));

//Who is buying lunch?



function selectBillPayer(payer) {
    return payer[Math.floor(Math.random()*payer.length)];
}

var payer = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(selectBillPayer(payer));

