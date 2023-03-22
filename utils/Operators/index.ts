import { Operator } from "@/types/Operators";

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