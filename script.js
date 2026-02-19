const state = {
  leftWeight: null,
  rightWeight: null,
  angle: 0,
  logs: []
};

const randomWeightGenerator = () => {
    return Math.floor(Math.random() * 10) + 1;
}

let weight = randomWeightGenerator();
console.log(weight);