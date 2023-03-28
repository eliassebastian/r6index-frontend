import { Operator } from "@/types/Operators";
import { Weapon } from "@/types/Weapons";

// get the best operator for a player based on their individual stats
export const calculateBestOperator = (operators: Operator[]) => {
    return operators.reduce((bestOperator, currentStats) => {
        const currentScore = currentStats.roundsPlayed * 0.3
            + currentStats.roundsWithKOST.value * 100 * 0.3
            + currentStats.killDeathRatio.value * 0.1
            + currentStats.winLossRatio * 0.1;

        if (!bestOperator || currentScore > bestOperator.score) {
            return { ...currentStats, score: currentScore };
        }

        return bestOperator;
    }, { ...operators[0], score: -Infinity });
}

// get the best weapon for a player based on their individual stats
export const calculateBestWeapon = (weapons: Weapon[]) => {
    return weapons.reduce((bestWeapon, weapon) => {
        const calculateScore = (w: Weapon) =>
            w.roundsWon * 1 +
            w.roundsPlayed * 0.5 +
            w.kills * 0.5 +
            w.headshots * 2 +
            w.headshotAccuracy * 10 +
            w.roundsWithAKill * 5 +
            w.roundsWithMultiKill * 5;

        return calculateScore(weapon) > calculateScore(bestWeapon) ? weapon : bestWeapon;
    });
}