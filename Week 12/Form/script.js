const form = document.getElementById("gamingForm");
const results = document.getElementById("results");

// Wait for the form to be submitted
form.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Collect the values after the user submits
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const budget = document.getElementById("budget").value;
    const platform = document.getElementById("platform").value;
    const games = document.getElementById("games").value;
    const accessories = document.getElementById("accessories").checked;

    // Display the collected information
    results.innerHTML = `
        <h2>Your Gaming Preferences</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Budget: $${budget}</p>
        <p>Platform: ${platform}</p>
        <p>Favorite Games: ${games}</p>
        <p>Interested in Accessories: ${accessories ? "Yes" : "No"}</p>
    `;

});