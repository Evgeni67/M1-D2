/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* const myArray = [1,2,3,4,5]; */

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* const user = {
    name : "Evgeni",
    surname: "Gyurov",
    email: "evgeni776@abv.bg",
    age: 19
}
*/

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* const user = {
    name : "Evgeni",
    surname: "Gyurov",
    email: "evgeni776@abv.bg",
    age: 19,
    drivingLicence: true
}*/

/* EXERCISE 4
Remove from the previously created object the age
*/

/* const user = {
    name : "Evgeni",
    surname: "Gyurov",
    email: "evgeni776@abv.bg",
    age: 19,
    drivingLicence: true
}
delete user.age;*/

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* const user = {
    name : "Evgeni",
    surname: "Gyurov",
    mail: "evgeni776@abv.bg",
    age: 19,
    drivingLicence: true
}
 const secondUser = {
    name : "John",
    surname: "Doe",
    mail: "johnDOe@gmail.com"
 }
 if(user.name === secondUser.mail)
 {
console.log("This email is already taken")
  }*/

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* let totalShoppingCart = 120;
let totalPrice = totalShoppingCart;

if(totalPrice < 50)
{
return;
}else
{
totaPrice+= 10;
}
console.log("Total Price: " + totalPrice); */

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* let totalShoppingCart = 120;
let totalPrice = totalShoppingCart;

if(totalPrice < 50)
{
return;
}else
{
totaPrice+= 10;
}
console.log("Total Price: " + totalPrice * 0.8) */

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* const cars = [];
const car =
{
brand: "Mercedes",
model: "S class",
licencePlate:7777
}
cars.push(car);

for (let index = 1; index < 6; index++) {
    const newCar =
{
brand: "Mercedes",
model: "S class",
licencePlate: 7777 + index
}
    cars.push(newCar)
}*/

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* const carsToRent = [];
const car =
{
brand: "Mercedes",
model: "S class",
licencePlate:7777
}
carsToRent.push(car);

for (let index = 1; index < 6; index++) {
    const newCar =
{
brand: "Mercedes",
model: "S class",
licencePlate: 7777 + index
}
    carsToRent.push(newCar)
*/

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* const cars = [];
const car =
{
brand: "Mercedes",
model: "S class",
licencePlate:7777
}
cars.push(car);

for (let index = 1; index < 6; index++) {
    const newCar =
{
brand: "Mercedes",
model: "S class",
licencePlate: 7777 + index
}
    cars.push(newCar)
}

cars.shift();
cars.pop();
*/

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* const cars = [];
const car =
{
brand: "Mercedes",
model: "S class",
licencePlate:7777
}
cars.push(car);

for (let index = 1; index < 6; index++) {
    const newCar =
{
brand: "Mercedes",
model: "S class",
licencePlate: 7777 + index
}
    cars.push(newCar);
}

cars.forEach(element => console.log(element.brand + " " + element.model + " " + element.licencePlate)
)*/

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* let countOfCars = 0;
let carsForRent = [];                 
let carsForSale = [];     
const car =
{
brand: "Mercedes",
model: "S class",
licencePlate:7777
}
carsForRent.push(car);

for (let index = 1; index < 6; index++) {
    const newCar =
{
brand: "Mercedes",
model: "S class",
licencePlate: 7777 + index
}
carsForRent.push(newCar);
}

for (let index = 1; index < 4; index++) {
    const newCar =
{
brand: "AUDI",
model: "A" + index + 1,
licencePlate: 7777 + index + 12345
}
carsForSale.push(newCar);
}
countOfCars = carsForSale.length + carsForRent.length
console.log(countOfCars) */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* let countOfCars = 0;
let carsForRent = [];                 
let carsForSale = [];     
const car =
{
brand: "Mercedes",
model: "S class",
licencePlate:7777
}
carsForRent.push(car);

for (let index = 1; index < 6; index++) {
    const newCar =
{
brand: "Mercedes",
model: "S class",
licencePlate: 7777 + index
}
carsForRent.push(newCar);
}

for (let index = 1; index < 4; index++) {
    const newCar =
{
brand: "AUDI",
model: "A" + index + 1,
licencePlate: 7777 + index + 12345
}
carsForSale.push(newCar);
}
countOfCars = carsForSale.length + carsForRent.length
carsForSale.forEach(element => console.log(element.brand + " " + element.model + " " + element.licencePlate)) */

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
