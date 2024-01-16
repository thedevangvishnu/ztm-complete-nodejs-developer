// Use event emitter and understand the observer pattern through code
// Demonstrate the racer-observer example here.
/*
Celebrity, first observer (a friend) and second observer (his competitor)
Three races happens
    - wins first
    - looses second
    - wins third

First observer: positive, encouraging and supportive feedback
Second observer: negative, discouraging and competitive feedback
*/

const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Observer 1
celebrity.on("race", ({ number, result }) => {
  console.log(`Race ${number}`);
  if (result === "win") {
    console.log("Friend: Amazing. You are the best");
  }

  if (result === "loose") {
    console.log("Friend: No worries. Let's try again. You will win this time");
  }
});

// Observer 2
celebrity.on("race", ({ number, result }) => {
  console.log(`Race ${number}`);
  if (result === "win") {
    console.log("Competitor: Ehhwwww. You do not deserver to win");
  }

  if (result === "loose") {
    console.log("Competitor: I knew! You are looser");
  }
});

celebrity.emit("race", { number: 1, result: "win" });
celebrity.emit("race", { number: 2, result: "loose" });
celebrity.emit("race", { number: 3, result: "win" });
