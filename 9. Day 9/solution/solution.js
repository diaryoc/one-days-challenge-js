let buttonColor = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userPattern = []

$(document).keypress(function (event) {
    nextSequence()
})

$(".btn").each(function () {
    $(this).on("click", function () {
        userPattern.push($(this).attr("id"));
        $(this).fadeOut(100).fadeIn(100);
        playSound($(this).attr("id"))
        if (gamePattern[userPattern.length - 1] === userPattern[userPattern.length - 1]) {
            if (userPattern.length === gamePattern.length) {
                setTimeout(function () {
                    nextSequence()
                },1000)
            }
        }else {
            gameOver()
        }
    })
})

function gameOver() {
    gamePattern = []
    playSound("wrong")
    let body = $("body")
    body.addClass("game-over")
    setTimeout(function () {
        body.removeClass("game-over")
    },100)
    $("#level-title").text("Game Over, Press A Key to restart");
}
function nextSequence() {
    userPattern = []
    let random = Math.floor(Math.random() * buttonColor.length);
    let randomColor = buttonColor[random];
    gamePattern.push(randomColor);
    $("#level-title").text("Level "+gamePattern.length);
    $("#"+randomColor).fadeOut(100).fadeIn(100);
    playSound(randomColor)
    console.log(userPattern)
    console.log(gamePattern)
}
function playSound(name) {
    let audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}