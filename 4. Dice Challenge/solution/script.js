function getRandomInt() {
    let diceOne = Math.floor(Math.random() * 6);
    let diceTwo = Math.floor(Math.random() * 6);
    return [diceOne+1, diceTwo+1];
}
    let getDiceOne = document.querySelector(".img1")
    let getDiceTwo = document.querySelector(".img2")
    let getH1 = document.querySelector("h1");
    let diceRandom = getRandomInt()

    if (diceRandom[0]>diceRandom[1]){
        getDiceOne.src = "./images/dice"+diceRandom[0]+".png";
        getDiceTwo.src = "./images/dice"+diceRandom[1]+".png";
        getH1.innerHTML = "Player 1 Win";
    } else if (diceRandom[0]< diceRandom[1]){
        getDiceOne.src = "./images/dice"+diceRandom[0]+".png";
        getDiceTwo.src = "./images/dice"+diceRandom[1]+".png";
        getH1.innerHTML = "Player 2 Win";
    } else if (diceRandom[0]===diceRandom[1]){
        getDiceOne.src = "./images/dice"+diceRandom[0]+".png";
        getDiceTwo.src = "./images/dice"+diceRandom[1]+".png";
        getH1.innerHTML = "Draw";
    }
