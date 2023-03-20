import type { DetailedValue } from "../Player";

export type Operators = {
    operators: OperatorSide;
}

export type OperatorSide = {
    attacker: Operator[];
    defender: Operator[];
}

export type Operator = {
    statsDetail:            string;
    matchesPlayed:          number;
    roundsPlayed:           number;
    minutesPlayed:          number;
    matchesWon:             number;
    matchesLost:            number;
    roundsWon:              number;
    roundsLost:             number;
    kills:                  number;
    assists:                number;
    death:                  number;
    headshots:              number;
    meleeKills:             number;
    teamKills:              number;
    openingKills:           number;
    openingDeaths:          number;
    trades:                 number;
    openingKillTrades:      number;
    openingDeathTrades:     number;
    revives:                number;
    distanceTravelled:      number;
    winLossRatio:           number;
    killDeathRatio:         DetailedValue;
    headshotAccuracy:       DetailedValue;
    killsPerRound:          DetailedValue;
    roundsWithAKill:        DetailedValue;
    roundsWithMultiKill:    DetailedValue;
    roundsWithOpeningKill:  DetailedValue;
    roundsWithOpeningDeath: DetailedValue;
    roundsWithKOST:         DetailedValue;
    roundsSurvived:         DetailedValue;
    roundsWithAnAce:        DetailedValue;
    roundsWithClutch:       DetailedValue;
    timeAlivePerMatch:      number;
    timeDeadPerMatch:       number;
    distancePerRound:       number;
    score:                 number;
}