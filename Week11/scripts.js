let currentMAngle = 0;
let currentCAngle = 0;

function mOut(obj) {
    obj.innerHTML = "SPIN ME"
    obj.style.transform = `rotate(${currentMAngle}deg)`;
}
function mOver(obj) {
    obj.innerHTML = "KEEP SPINNING"
    currentMAngle += 10;
    obj.style.transform = `rotate(${currentMAngle}deg)`;
}
const click = document.getElementById("click");
click.addEventListener("click", () =>{
    currentCAngle -= 10;
    click.style.transform = `rotate(${currentCAngle}deg)`;
    click.innerHTML = "<button>KEEP CLICKING!</button>";
});
const dblclick = document.getElementById("dblclick");
dblclick.addEventListener("dblclick", () =>{
    document.body.style.backgroundColor = 
    currentCAngle += 10;
    dblclick.style.transform = `rotate(${currentCAngle}deg)`;
});
