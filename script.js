import { winLose } from "./winLose";
const button = document.querySelector("button:active,.playerHand:active");
event.target.addEventListener("click",winLose(button));