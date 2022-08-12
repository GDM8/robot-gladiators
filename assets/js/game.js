// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerNames = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerNames, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyNames.length);

var fight = function(enemyNames) {
  // if the enemy-robot's health is zero or less, exit from the fight loop
    while(playerHealth > 0 && enemyHealth > 0) {
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerNames + ' has decided to skip this fight.  Goodbye ');
            // skipping penalty subtract playerMoney
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
      }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerNames + ' attacked ' + enemyNames + '. ' + enemyNames + ' now has ' + enemyHealth + ' health remaining.'
    );
    // console.log(enemyNames[3]);

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      break;
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked " + playerNames + ". " + playerNames + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerNames + " has died!");
      break;
    } else {
      window.alert(playerNames + " still has " + playerHealth + " health left.");
    }
  } 
};

var startGame = function() {
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      // debugger;
      fight(pickedEnemyName);
    }
    else {
      window.alert(' You have lost your robot in battle! Game Over');
      break;
    }
    // endGame();
  };

  var endGame = function() {
    if(playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " .");
    }
    else {
      window.alert("You've lost your robot in battle.")
    }

    var playAgainConfirm = window.confirm("Would youlike to play again?");

    if (playAgainConfirm) {
      startGame();
    }
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon")
    }
  }
};
// start game upon load up
startGame();