export const winLose = (button) => {
    const playerHand = button.value;
    const randomnumber = Math.floor(Math.random() * (2 + 1));
    let computerHand = "";
    let game = "";
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
    document.getElementById("winLoseArea").textContent = game;
};