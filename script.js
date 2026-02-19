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

const createWeight = (xPosition) => {
  return {
    weight: getRandomWeight(),
    color: getRandomColor(),
    x: xPosition,
    y: 0
  };
}

weight = createWeight(200);
console.log(weight);