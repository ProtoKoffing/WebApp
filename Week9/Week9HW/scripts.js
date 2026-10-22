function infoSpread() { //gives info about author and program
    console.log("Made by: Jade")
    console.log("Date: 10/21/2026")
    console.log("Class: WebApp")
    console.log("Assignment: Week 9 HW")
}
function greetUser() { // Prompts the name and uses it to log a message
    var name = prompt("What is your name?");
    console.log("Hello " + name + "!");
}
function greetButCool() { // Logs a general greeting message with a countdown for info spread
    console.log("Hello! Welcome to the program.");
    for (let i = 10; i > 0; i--) {
        console.log(i);
        if (i === 1) {
            infoSpread();
        }
    }
}