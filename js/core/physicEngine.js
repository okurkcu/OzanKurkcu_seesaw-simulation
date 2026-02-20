import { CONSTANTS } from "../constants";

export class physicsEngine {
    // Function for Calculating Angle
    static calculateAngle(weights, middlePoint){
        let totalTorque = 0;

        weights.forEach(weightBall => {
            const distance = weightBall.x - middlePoint;
            totalTorque = weightBall.weight * distance;
        });

        const normalized = totalTorque / 500;

        // To keep the angle between + and - angle (clamp)
        return Math.max(
            -CONSTANTS.MAX_ANGLE,
            Math.min(CONSTANTS.MAX_ANGLE, normalized)
        );
    }
}