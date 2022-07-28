var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// SUBTRACT THE VALUE OF 'playerAttack' FROM THE VALUE OF 'enemyHealth' AND USE THAT RESULT TO UPDATE THE VALUE IN THE 'enemyHealth' VARIABLE

// LOG A RESULTING MESSAGE TO THE CONSOLE SO WE KNOW THAT IT WORKED.
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

// SUBTRACT THE VALUE OF 'enemyAttack' FROM THE VALUE OF 'playerHealth' AND USE THAT RESULT TO UPDATE THE VALUE IN THE 'playerHealth' VARIABLE
    playerHealth = playerHealth - enemyAttack;
    enemyHealth = enemyHealth - playerAttack;

// LOG A RESULTING MESSAGE TO THE CONSOLE SO WE KNOW THAT IT WORKED.
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
    );

    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining "  
    );
// CHECK ENEMY HEALTH
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }  
    console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " Health remaining");

// CHECK PLAYER HEALTH
    if(playerHealth <= 0) {
        window.alert(playerName + " has died ");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left .");
    }
};

fight();