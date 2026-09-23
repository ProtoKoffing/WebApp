const host = "Tahmid"; // Host's name
let score = 0; // Initial score
let attempts = 3; // Initial number of attempts
let failed = false; // Indicates if the user has failed
let user = "Marley"; // User's name

score = score+1; // Adds to score when correct
attempts = attempts-1; // Decreases the number of attempts
const intro = "Hello, " + user + "! Welcome, I am " + host + "."; // Introduction message
const outro = "Goodbye, " + user + "! Thank you for visiting, I was " + host + "."; // Outro message
console.log("Score:", score); 
console.log("Attempts:", attempts);
console.log("Failed:", failed);
console.log("User:", user);
console.log("Host:", host);
console.log(intro);
console.log(outro);


document.body.innerHTML += "<p>" + outro + "</p>"; // It displays the message in the innerHTML of the body, added a <p> tag and the outro variable.