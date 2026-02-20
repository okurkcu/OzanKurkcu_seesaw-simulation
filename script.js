import { Selectors } from "./js/selectors.js";

const state = {
  leftWeight: null,
  rightWeight: null,
  angle: 0,
  logs: []
};

const getRandomWeight = () => {
    let weight = Math.floor(Math.random() * 10) + 1;
    console.log(weight);
    return weight;
}

const getRandomColor = () => {
  const colors = ["#E74C3C", "#3598DB", "#F39C12", "#34495E", "#2FCC71", "#9B59B6"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// const createWeight = (xPosition) => {
//   return {
//     weight: getRandomWeight(),
//     color: getRandomColor(),
//     x: xPosition,
//     y: 0
//   };
// }

// weight = createWeight(200);
// console.log(weight);

const getMousePosition = () => {
    Selectors.seesawClickableArea.addEventListener("mousemove", (e) => {
        let xPos = e.clientX;
        console.log("The X-Axis position of the mouse is: ", xPos);
    })
}

getMousePosition();

var rect = Selectors.pivot.getBoundingClientRect();
console.log("Exact middle point: ", rect.left + Selectors.pivot.getBoundingClientRect().width / 2);

console.log("Width of the Pivot: ", Selectors.pivot.getBoundingClientRect().width);