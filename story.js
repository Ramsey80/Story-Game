
playerName = prompt("Please enter your name", "John Doe");

alert("Hello, " + playerName + ". Thank you for joining us today!");
alert(introText);

let firstChoice = prompt(pathText0 + " Type 'left' for the bathroom or 'right' for the kitchen or 'upstairs' for the upper hallway.").toLowerCase();

if (firstChoice === "left") {
  // If they chose the bathroom
  alert("You walk down the left to the bathroom.");
  alert(endText2);

} else if (firstChoice === "right") {
  // If they chose the kitchen
  alert("You take the right path into the kitchen.");
  
  // Second decision
  let secondChoice = prompt(pathText5 + " Type 'open' to open the refrigerator or 'chat' to talk with everyone in the kitchen.").toLowerCase();
  
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

} else if (thirdChoice === "upstairs"){
  // Third decision
  alert(pathText6)
  let thirdChoice = prompt(pathText12 + " Type 'left' to go left or 'back' to head back downstairs.").toLowerCase();
  
  if(thirdChoice === "left"){
    alert(pathText9);
    let thirdChoice2 = prompt(pathText9 + " Type 'fight' to fight or 'flight' to run").toLowerCase();
      if(thirdChoice2 = "fight"){
        alert(pathText9);
        alert(pathText11);
        alert(endText4);
      } else if (thirdChoice2 = "flight"){
        alert(pathText10)
        alert(endText2);
      }
  } else if(thirdChoice === "back"){
    alert(pathText7);
  } else{
    alert("Invalid choice. Let's assume you went straight ahead.");
    alert("You take the straight path up to the bedroom all alone ");
    alert(endText3);
  }
}else {
  alert("Invalid choice. Let's assume you went straight ahead.");
  alert("You take the straight path up to the bedroom all alone ");
  alert(endText3);
}