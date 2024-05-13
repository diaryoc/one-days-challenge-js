let buttonColours = ["red", "blue", "green", "yellow"]
let randomChosenColour =[]
let gamePattern =[]
function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    let audio = new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play();
    return gamePattern;
}
$(document).on("keydown", (e)=>{
    if (e.key === 'a'){
        nextSequence();
    }
});

$("div.btn").on("click", function (){
    $(this).fadeOut(50).fadeIn(50);
    let audio = new Audio("sounds/"+$(this).attr("id")+".mp3");
    audio.play();
    nextSequence();
    console.log(gamePattern);
});
