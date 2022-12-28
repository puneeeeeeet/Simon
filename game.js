var gamePattern = [];
var buttonColor = ["red","blue","green","yellow"];
var randomNumber = Math.floor(Math.random()*4);
var randomChosenColor = buttonColor[randomNumber];
gamePattern.push(randomChosenColor);
$("#randonChosenColor").click(function(){
      alert(randomChosenColor);
});

// .fadeOut(100).fadeIn(100);

// var soundFile = "sounds/" + randomChosenColor + ".mp3";
// var audio = new Audio('soundFile');
// audio.play();

