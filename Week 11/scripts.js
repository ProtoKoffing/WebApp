let currentMAngle = 0;  //This all sets the initial variables
let currentCAngle = 0;
let currentDAngle = 0;
let currentX = 0;

function mOut(obj) { //defines a function for mouseout
    obj.innerHTML = "SPIN ME" //changes the text of the object
    obj.style.transform = `rotate(${currentMAngle}deg)`; //rotates the object
}
function mOver(obj) { // defines a function for mouseover
    obj.innerHTML = "KEEP SPINNING" //changes html
    currentMAngle += 10; //adds to angle
    obj.style.transform = `rotate(${currentMAngle}deg)`; //changes to angle to new angle
}
const click = document.getElementById("click"); //get click id
click.addEventListener("click", () =>{ //listen for a click
    currentCAngle -= 10;
    click.style.transform = `rotate(${currentCAngle}deg)`;
    click.innerHTML = "<button>KEEP CLICKING!</button>";
});
const dblclick = document.getElementById("dblclick"); //this function gets dblclick from html and listens for a double click
dblclick.addEventListener("dblclick", () =>{
    if (document.body.style.backgroundColor === "lightblue") { // if the background is light blue, change it to yellow, if it is pink turn it to blue, if it is neither turn to pink, and rotate
        document.body.style.backgroundColor = "lightyellow";
    }else if (document.body.style.backgroundColor === "lightpink") {
        document.body.style.backgroundColor = "lightblue";
    } else
        document.body.style.backgroundColor = "lightpink"; 
    currentDAngle += 10;
    dblclick.style.transform = `rotate(${currentDAngle}deg)`;
});
document.getElementById("testin").addEventListener("keydown", xMove); //get the testin id and listen for a key down in the textbox, if there is one move it to the right.
function xMove(){
    currentX += 10;
    document.getElementById("testin").style.transform = `translateX(${currentX}px)`
}

//W3 schools used as main source.