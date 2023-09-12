var isAlive = true;
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameRunning = true;
var keyPressCount = 1;

function nextSequence(){
    level++
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("." + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}

$(".btn").on("click", function (){
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    keyPressCount = 0;
    var colorIndex = buttonColors.indexOf(userChosenColor);
    checkAnswer(colorIndex)
    
    

});


function playSound(name){
   switch (name){
    case "blue":
        var audio = new Audio('sounds/blue.mp3');
        audio.play();
        break;
    case "green":
        var audio = new Audio('sounds/green.mp3');
        audio.play();
        break;
    case "red":
        var audio = new Audio('sounds/red.mp3');
        audio.play();
        break;
    case "yellow":
        var audio = new Audio('sounds/yellow.mp3');
        audio.play();
        break;
    default:
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
   }
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
    $("#" + currentColour).removeClass("pressed")
    }, 100);
}
$(document).on('keydown', function(){
    
    if(keyPressCount === 1){
        keyPressCount++
        nextSequence()
    }

});

function checkAnswer(currentLevel){
    var lastButton = gamePattern.pop();
    if(buttonColors[currentLevel] === lastButton){
        console.log("success");
        gamePattern.push(lastButton)
        setTimeout(function() {
            nextSequence()
        }, 1000);
    }else{
        console.log("wrong");
    }
   
}
