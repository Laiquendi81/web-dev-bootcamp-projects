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
var a = "3";
var b = "8";

if (a == "3" && b =="8") {
    a = "8";
    b = "3";
} else {
    console.log("Not this time!");
}

console.log(a,b);