let score = Number(prompt("Enter your score:"));
let age =  Number(prompt("Enter your age:"));
let user = prompt("Enter your username:");
// Grade check
if (score >= 90) {
    console.log("You got an A!");
}else if (score >= 80) {
    console.log("You got a B!");
}else if (score >= 70) {
    console.log("You got a C!");
}else if (score >= 60) {
    console.log("You got a D!");
}else {
    console.log("You got an F!");
}
// Age check
if (age >= 18) {
    console.log("Adult.");
}else if (age >= 13) {
    console.log("Minor.");
}
// User check
if (user === "admin") {
    console.log("Welcome, admin!");
}else if (user === "guest") {
    console.log("Welcome, guest!");
}else {
    console.log("Welcome, " + user + "!");
}