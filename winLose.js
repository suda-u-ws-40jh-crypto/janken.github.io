export const winLose = (button) => {
    const playerHand = button.value;
    const randomnumber = Math.floor(Math.random() * (2 + 1));
    let game = "";
    let computerHand = "";
    switch (randomnumber){
        case 0:
            computerHand = "rock";
            break;
        case 1:
            computerHand ="scissors";
            break;
        case 2:
            computerHand ="paper";
            break;
    }
    if (playerHand === "scissors"){
        if (computerHand ==="paper"){
            game = "勝ち";
        }else{
            game = "負け";
        }
    }else if (playerHand === "paper"){
        if (computerHand ==="rock"){
            game = "勝ち";
        }else{
            game = "負け";
        }
    }else if(playerHand === "rock"){
        if (computerHand ==="scissors"){
            game = "勝ち";
        }else{
            game = "負け";
        }
    }
    const computerHandImageFile = ("./images/" + computerHand);
    const playerHandImageFile = ("./images/" + playerHand);
    document.getElementById("winLoseArea").textContent = game;
    const playerHandImage = document.getElementById("playerHand");
    const computerHandImage = document.getElementById("computerHand");
    computerHandImage.src = computerHandImageFile;
    playerHandImage.src = playerHandImageFile;
};
