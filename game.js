var buttonColor = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$("body").keypress(function(){
    if(!started){
    $("#level-title").html("Level "+level);
    nextSequence();
    started = true;
    }
});

$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
        if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
            console.log("successssssss");
            if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
                setTimeout(function(){
                    nextSequence();
                }, 1000);
            }
           
        }
        else{
                console.log("wrong hai");
        }
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").html("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function() {
    $("#"+ currentColor).removeClass("pressed");
}, 100);
  }

  
