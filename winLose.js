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
            computerHand = "scissors";
            break;
        case 2:
            computerHand = "paper";
            break;
    }
    if (playerHand === "scissors"){
        if (computerHand === "paper"){
            game = "勝ち";
        }else if (computerHand === "rock"){
            game = "負け";
        }else{
            game = "あいこ";
        }
    }else if (playerHand === "paper"){
        if (computerHand === "rock"){
            game = "勝ち";
        }else if (computerHand === "scissors"){
            game = "負け";
        }else{
            game = "あいこ";
        }
    }else if(playerHand === "rock"){
        if (computerHand === "scissors"){
            game = "勝ち";
        }else if (computerHand === "paper"){
            game = "負け";
        }else{
            game = "あいこ";
        }
    }
    const computerHandImageFile = ("./images/" + computerHand + ".png");
    const playerHandImageFile = ("./images/" + playerHand + ".png");
    document.getElementById("winLoseArea").textContent = game;
    const playerHandImageArea = document.querySelector("#playerhand img");
    const computerHandImageArea = document.querySelector("#computerhand img");
    computerHandImageArea.src = computerHandImageFile;
    playerHandImageArea.src = playerHandImageFile;
};
