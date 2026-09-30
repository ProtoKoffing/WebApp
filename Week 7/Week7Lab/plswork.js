for (let i = 0; i <= 10; i++) { // i begins at 0, so long as i is less than or equal to 10, the loop will continue to run. Then add 1 to i each time the loop runs
    console.log(i);
}

let countg = prompt("How many times do you want to count?"); // prompt the user to enter a number
for (let i = 0; i <= countg; i++) { // i begins at 0, as long as i is less than or equal to countg, the loop will continue to run. Then add 1 to i.
    console.log(i); // print i
}

let triangle = "";
for (let i = 0; i < 10; i++) { // i is 0, if i is less than 10, add 1 to i
    triangle += "#"; // add a star to the triangle variable each time the loop runs
    console.log(triangle); // print the triangle variable to the console
}
