let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"]
let level =0;
let start = 0;






$(document).on("keypress",function(event){
if(!start)
       { $("h1").text("Level "+level)
        start = 1;
        nextsequence();}
    
})






// eventlistener
$(".btn").on("click",function(event){
    userClickedPattern.push(event.target.id)
    playsound(event.target.id)
    $("#" + event.target.id).fadeIn(100).fadeOut(100).fadeIn(100)
    animatepress(event.target.id)
    checkanswer(userClickedPattern.length-1)
})

function startover(){
    level =0;
    start =0;
    gamePattern = [];
}





function checkanswer(currentLevel){
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextsequence();
            },1000)
        }
    }
    else{
       var audio = new Audio("sounds/wrong.mp3")
       audio.play();
       $("h1").text("Game Over,Press any key to start")
       $("body").addClass("game-over")
       setTimeout(function(){
        $("body").removeClass("game-over")
       },200)
       startover();
    }
    }
    






function nextsequence() {
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level)

    let randomnumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomnumber]
    gamePattern.push(randomChosenColor);
    playsound(randomChosenColor)
    $("#" +randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    

// sequence generator eventlistener
}







// player function
function playsound(name){
    var aud = new Audio("sounds/" + name + ".mp3")
    aud.play();
}






function animatepress(currentColor){
$("#"+currentColor).addClass("pressed")
setTimeout(function(){
    $("#"+currentColor).removeClass("pressed")
},100)
}
