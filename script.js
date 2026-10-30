import { winLose } from "./winLose.js";
const button = document.querySelector("button:active,.playerHand:active");
event.target.addEventListener("click",winLose(button));
