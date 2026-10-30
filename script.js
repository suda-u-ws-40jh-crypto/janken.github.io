import { winLose } from "./winLose.js";

const buttons = document.querySelectorAll(".playerHand button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        winLose(button);
    });
});
