const host = "Tahmid"; // Host's name
let score = 0; // Initial score
let attempts = 3; // Initial number of attempts
let failed = false; // Indicates if the user has failed
let user = prompt("What is your name?");
let estimatedScore = Number(prompt("What is your estimated score?"));
let relationship = prompt("T/F, are you close with " + host + "?");

const intro = "Hello, " + user + "! Welcome, I am " + host + "."; // Introduction message
const outro = "Goodbye, " + user + "! Thank you for visiting, I was " + host + "."; // Outro message
if (relationship === "T") { //Checks for if relationship is T
    console.log("<p>You are close with " + host + "!</p>");
} else if (relationship === "F") { //If F
    console.log("<p>You are not close with " + host + ".</p>");
}else { //Invalid input for relationship
    console.log("<p>Invalid input for relationship.</p>");
}
if (estimatedScore > 5) { //Checks for if estimated score is greater than 5
    console.log("<p>You are confident.</p>");
} else if (estimatedScore <= 5) { //If estimated score is less than or equal to 5
    console.log("<p>You are not very confident.</p>");
}




document.body.innerHTML += "<p>" + outro + "</p>"; // It displays the message in the innerHTML of the body, added a <p> tag and the outro variable.