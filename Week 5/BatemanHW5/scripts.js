const game = "rivals";
let time_played = 123;
let username = "ProtoKoffing"
let game_active = false;
let game_rating = 9.8;
let avg_rating = time_played + game_rating / 2;
let time_hours = time_played / 60;
console.log(username + " is playing " + game);
console.log("The game has a rating of " + game_rating + " and has been played for " + time_played + " minutes.");
console.log(avg_rating);
console.log(time_hours);
