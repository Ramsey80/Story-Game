
playerName = prompt("Please enter your name", "John Doe");

alert("Hello, " + playerName + " Thank you for joining us today!");
alert(introText);

let firstChoice = prompt(pathText1 + "Type 'left' for the bathroom or 'right' for the kitchen.").toLowerCase();

if (firstChoice === "left") {
  // If they chose the bathroom
  alert("You walk down the left to the bathroom.");
  alert(endText2);

} else if (firstChoice === "right") {
  // If they chose the kitchen
  alert("You take the right path into the kitchen.");
  
  // Second decision
  let secondChoice = prompt(pathText2 + "\n\nType 'open' to open the refrigerator or 'chat' to talk with everyone in the kitchen.").toLowerCase();
  
  if (secondChoice === "open") {
    alert(pathText4);
    alert(endText2);
  } else if (secondChoice === "chat") {
    alert(pathText3);
    alert(endText1);
  } else {
    alert("Invalid input. Let's just say you listened to everyones stories.");
    alert(pathText3);
    alert(endText3);
  }

} else {
  alert("Invalid choice. Let's assume you went straight ahead.");
  alert("You take the straight path up to the bedroom all alone");
  alert(endText3);
}