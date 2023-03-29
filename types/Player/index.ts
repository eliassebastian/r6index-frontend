import type { Map } from "../Maps";
import type { OperatorSide } from "../Operators";
import type { Weapon } from "../Weapons";

export type PlayerResponse = {
    status:   string;
    duration: number;
    data:     PlayerProfile;
}

export type PlayerProfile = {
    profileId:  string;
    userId:     string;
    platform:   string;
    nickname:   string;
    firstIndex: number;
    lastSeen:   number;
    lastUpdate: number;
    aliases:    Alias[];
    xp:         number;
    level:      number;
    summary:    Summary;
    ranked:     Ranked;
    weapons:    Weapon[];
    maps:       Map[];
    operators:  OperatorSide;
    trends:     Trends;
}

export type Alias = {
    name: string;
    date: Date;
}

export type DetailedValue = {
    value: number;
}

export type Ranked = {
    max_rank:          number;
    season:            number;
    rank:              number;
    max_rank_points:   number;
    rank_points:       number;
    top_rank_position: number;
    abandons:          number;
    losses:            number;
    wins:              number;
    deaths:            number;
    kills:             number;
    rank_text:         string;
    max_rank_text:     string;
    kill_death_ratio:  number;
    win_lose_ratio:    number;
}

export type Summary = {
    openingKills:           number;
    openingDeaths:          number;
    trades:                 number;
    openingKillTrades:      number;
    openingDeathTrades:     number;
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
}

export type Trends = {
    movingPoints: number;
    trends:       Trend[];
}

export type Trend = {
    name:    string;
    high:    number;
    average: number;
    low:     number;
    trend:   number[];
    actuals: number[];
}