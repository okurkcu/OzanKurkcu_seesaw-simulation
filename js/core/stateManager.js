import { Selectors } from "../selectors";

export class stateManager {
    constructor (storageKey = Selectors.storageKey){
        this.storageKey = storageKey,
        this.weight = [],
        this.angle = 0,
        this.nextWeight = null;
    }

    addWeight(weight){
        this.weight.push(weight);
    }

    setNextWeight(weight){
        this.nextWeight = weight;
    }

    setAngle(angle) {
        this.angle = angle;
    }

    reset() {
      this.weights = [];
      this.angle = 0;
      this.nextWeight = null;
      this.clearStorage();
    }

    // --------------------------------------------------------------

    // Calculating Derived Data

    // Getting Left-Side Total Weight
    getLeftTotal(pivotX) {
      return this.weights
        .filter(weightBall => weightBall.x < pivotX)
        .reduce((sum, weightBall) => sum + weightBall.weight, 0);
    }

    // Getting Right-Side Total Weight
    getRightTotal(pivotX) {
      return this.weights
        .filter(weightBall => weightBall.x >= pivotX)
        .reduce((sum, weightBall) => sum + weightBall.weight, 0);
    }

    // Getting Total Weight
    getTotalWeight() {
      return this.weights.reduce((sum, weightBall) => sum + weightBall.weight, 0);
    }

    // --------------------------------------------------------------

    // Managing localStorage Operations

    save() {
      const data = {
        weights: this.weights,
        angle: this.angle,
        nextWeight: this.nextWeight
      };

      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    load() {
      const cached = localStorage.getItem(this.storageKey);
      if (!cached) return;

      const parsed = JSON.parse(cached);

      this.weights = parsed.weights || [];
      this.angle = parsed.angle || 0;
      this.nextWeight = parsed.nextWeight || null;
    }

    clearStorage() {
      localStorage.removeItem(this.storageKey);
    }
}