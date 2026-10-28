function greetUser() { // Prompts the name and uses it to log a message
    var name = prompt("What is your name?");
    console.log("Hello " + name + "!");
}
function addNumbers() { //Prompts for 2 numbers and logs the sum
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the second number:");
    var sum = Number(num1) + Number(num2);
    console.log("The sum is: " + sum);
}
function calculateArea() { // Prompts for length and width of a rectangle and logs the area
    var length = prompt("Enter the length of the rectangle:");
    var width = prompt("Enter the width of the rectangle:");
    var area = Number(length) * Number(width);
    console.log("The area of the rectangle is: " + area);
}