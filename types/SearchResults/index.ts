export type SearchResult = {
    status:   string;
    duration: number;
    data:     Data;
}

export type Data = {
    hits:               Hit[];
    estimatedTotalHits: number;
    limit:              number;
    processingTimeMs:   number;
    query:              string;
}

export type Hit = {
    aliases:    Alias[];
    firstIndex: number;
    lastSeen:   Date;
    lastUpdate: number;
    level:      number;
    nickname:   string;
    platform:   string;
    profileId:  string;
    ranked:     Ranked[];
    userId:     string;
}

export type Alias = {
    date: Date;
    name: string;
}

export type Ranked = {
    abandons:          number;
    deaths:            number;
    kills:             number;
    losses:            number;
    max_rank:          number;
    max_rank_points:   number;
    max_rank_text:     string;
    rank:              number;
    rank_points:       number;
    rank_text:         string;
    season:            number;
    top_rank_position: number;
    wins:              number;
}
