// Gets the elements we want to manipulate
const titleEl = document.getElementById("rivalsTitle");
const mainEl = document.getElementById("rivalsMain");
const sectionEl = document.getElementById("rivalsSection");
// Updates the title text
titleEl.textContent = "Rivals — Powered by JavaScript";

//Swaps the placeholder image with a new image and alt text
const imgEl = document.getElementById("rivalsImg");
imgEl.src = "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_Marvel_Rivals.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";
imgEl.alt = "A picture of the logo of Marvel Rivals";
// provides items for a table on the website
const items = [
{ name: "Thor", info: "The best vanguard" },
{ name: "Iron Man", info: "Annoying fly in the sky" },
{ name: "Captain America", info: "The roach." }
];
// Targets the list in html, clears, and adds new items.
const listEl = document.getElementById("rivalsList");
listEl.innerHTML = ""; // clear existing
items.forEach((obj) => {
const li = document.createElement("li");
li.textContent = `${obj.name} — ${obj.info}`;
listEl.appendChild(li);
});
//Toggles between two background colors on the main section of the page
const toggleBtn = document.getElementById("rivalsToggle");
toggleBtn.addEventListener("click", () => {
mainEl.classList.toggle("bglight");
});
// Swaps the image and alt text when the button is clicked
const swapBtn = document.getElementById("rivalsSwap");
let swapped = false;
swapBtn.addEventListener("click", () => {
if (!swapped) {
imgEl.src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Red_Dragon_scuplture_during_River_Lee_flooding%2C_October_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original"; //i couldn't find anything else rivals related that would correctly link so i did a big dragon image.
imgEl.alt = "Picture of a red dragon";
swapped = true; } else {
imgEl.src = "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_Marvel_Rivals.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";
imgEl.alt = "Logo of Marvel Rivals";
swapped = false;
}
});
sectionEl.style.backgroundColor = "#585252"; 
sectionEl.style.color = "#ffffff";