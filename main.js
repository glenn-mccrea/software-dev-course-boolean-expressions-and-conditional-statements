/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.
*/

const readline = require("readline-sync");

const hasTorch = true;
const hasMap = false;
const hasSword = true;

console.log(
  "You see two paths: one leads to the mountains, the other to the village."
);
const choice = readline.question(
  "Do you go to the 'mountains' or the 'village'?"
);

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

console.log(
  "Now that you've gone to the " +
    choice +
    ", you hear a strange sound and follow it to a cave opening."
);
const choice2 = readline.question("Do you 'enter cave' or do you 'turn back'?");

if (choice2 === "enter cave" && hasTorch && hasSword) {
  console.log("You light your torch, draw your sword, and enter the cave.");
} else if (choice2 === "enter cave" && !hasTorch && hasSword) {
  console.log("You draw your sword in the dark and enter the cave.");
} else if (choice2 === "turn back" && hasSword && hasTorch) {
  console.log("You turn around and draw your sword as you leave.");
} else if (choice2 === "turn back" && !hasTorch && hasSword) {
  console.log("It's really dark, so you draw your sword.");
} else {
  console.log("You get lost and wander aimlessly.");
}

console.log("You hear a voice.");
const choice3 = readline.question("Do you 'answer' or stay 'quiet'?");
if (choice3 === "quiet") {
  console.log("You jump into a nearby bush and stay still.");
} else if (choice3 === "answer") {
  if (hasSword) {
    console.log("You answer the voice and ready your sword.");
  } else {
    console.log("You hide behind a tree and answer the voice.");
  }
}
