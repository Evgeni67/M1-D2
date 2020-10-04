/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/

/* let myArray = [1,2,3,4,5];
let myArrayCount = myArray.length;
let secondArray=[];
for (let index = 0; index < myArrayCount; index++) {
  secondArray.push(myArray.pop());
    }
myArray = secondArray;*/

/* EXERCISE 2
Create a code to get the maximum from an array
*/

/* let myArray = [1,2,3,4,5];
let biggestNum = Number.MIN_SAFE_INTEGER;

for (let index = 0; index < myArray.length; index++) {
 if(myArray[index] > biggestNum)
 {
     biggestNum = myArray[index];
 }
    }

    console.log(biggestNum)
        */

/* EXERCISE 3
Create a code to get the minimum from an array
*/

/* let myArray = [1,2,3,4,5];
let smallestNum = Number.MAX_SAFE_INTEGER;

for (let index = 0; index < myArray.length; index++) {
 if(myArray[index] < smallestNum)
 {
     smallestNum = myArray[index];
 }
    }
console.log(smallestNum)
         */

/* EXERCISE 4
Create a code to get only even numerical value from an array
*/

/* let myArray = [1,2,3,4,5];
let secondArray = [];
for (let index = 0; index < myArray.length; index++) {
if(myArray[index] % 2 === 0){
secondArray.push(myArray[index])
}
    }

   console.log(secondArray) */

/* EXERCISE 5
Write the code to delete the even entries from an array
*/
NOT READY!
/* let myArray = [1,2,3,4,5];
let countOfArray = myArray.length;
let secondArray = [];
for (let index = 0; index < countOfArray; index++) {
if(myArray[index] % 2 === 0){
myArray.splice(index, 1);
}
}
console.log(myArray)
    }
}        */

/* EXERCISE 6
Write the code to remove all the vocal from a string
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1
*/

/* let myArray = [1," ",3.5,4,"5asd"];
for (let index = 0; index < myArray.length; index++) {
    const typeOfElement = typeof myArray[index];
    if(typeOfElement === "number"){
        myArray[index]++;
    }
}*/

/* EXERCISE 8 
Replace all the strings into an array by their lenght
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/

/* let myArray = ["iphone","bestStriver","Mercedes"];
for (let index = 0; index < myArray.length; index++) {
    myArray[index] = myArray[index].length
}
console.log(myArray)*/

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT 
*/
