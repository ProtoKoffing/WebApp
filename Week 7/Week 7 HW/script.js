let countlimit = prompt("How high do you want it to count?");

while (isNaN(countlimit) || countlimit === "") { //while countlimit is not a number
    console.log("That is not a valid number."); //Log it
    countlimit = prompt("How high do you want it to count?"); //Re-ask, loop until number
}

countlimit = Number(countlimit); //turn the variable into a number

let ranchoice = prompt("Y/N: Do you want it to stop randomly as well?"); //see if they want a random stop

if(ranchoice === "Y"){ //If they chose Y
    random = true; //make random true
    console.log("true") //log it
}else if(ranchoice === "N"){ //if they chose N
    random = false; //make random false
    console.log("false") //log it
}else{ //if it gave any other input
    while(ranchoice != "Y", ranchoice != "N"){ //while the input is not Y or N
        console.log("That is not a valid option") //Log that it is not valid
        ranchoice = prompt("Y/N : Do you want it to stop randomly as well?") //prompt again for ranchoice
        if(ranchoice === "Y"){ //loop through Y or N again, loop until it is Y or N
            console.log("Random:Y")
            break
        }else if(ranchoice === "N"){
            console.log("Random:N")
        }
    }
}

if(ranchoice === "N"){
    for (let i = 0; i <= countlimit; i++){ //Aslong as i is below count limit, add 1 to I
        console.log(i)
    }
}else if(ranchoice === "Y"){ //if ranchocie is y
    for (let i = 0; i <= countlimit; i++){ //while i is less than count limit increment and log
        console.log(i)
        if(Math.random() < .10){ //if a random float 0-1 if less than .1 stop the function
            break;
        }
    }
}
//i got carried away mb, i like JS
