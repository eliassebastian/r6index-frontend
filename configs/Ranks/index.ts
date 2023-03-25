
type RankInfo = {
    name: string;
    min: number;
    max: number;
    color: string
}

export const RankedConfig: Record<number, RankInfo> = {
    0: { name: "Unranked", min: 0, max: 0, color: "#1f1f1f" },
    1: { name: "Copper 5", min: 1000, max: 1099, color: "#700100" },
    2: { name: "Copper 4", min: 1100, max: 1199, color: "#700100" },
    3: { name: "Copper 3", min: 1200, max: 1299, color: "#700100" },
    4: { name: "Copper 2", min: 1300, max: 1399, color: "#700100" },
    5: { name: "Copper 1", min: 1400, max: 1499, color: "#700100" },
    6: { name: "Bronze 5", min: 1500, max: 1599, color: "#815b31" },
    7: { name: "Bronze 4", min: 1600, max: 1699, color: "#815b31" },
    8: { name: "Bronze 3", min: 1700, max: 1799, color: "#815b31" },
    9: { name: "Bronze 2", min: 1800, max: 1899, color: "#815b31" },
    10: { name: "Bronze 1", min: 1900, max: 1999, color: "#815b31" },
    11: { name: "Silver 5", min: 2000, max: 2099, color: "#b3b3b3" },
    12: { name: "Silver 4", min: 2100, max: 2199, color: "#b3b3b3" },
    13: { name: "Silver 3", min: 2200, max: 2299, color: "#b3b3b3" },
    14: { name: "Silver 2", min: 2300, max: 2399, color: "#b3b3b3" },
    15: { name: "Silver 1", min: 2400, max: 2499, color: "#b3b3b3" },
    16: { name: "Gold 5", min: 2500, max: 2599, color: "#f2d200" },
    17: { name: "Gold 4", min: 2600, max: 2699, color: "#f2d200" },
    18: { name: "Gold 3", min: 2700, max: 2799, color: "#f2d200" },
    19: { name: "Gold 2", min: 2800, max: 2899, color: "#f2d200" },
    20: { name: "Gold 1", min: 2900, max: 2999, color: "#f2d200" },
    21: { name: "Platinum 5", min: 3000, max: 3099, color: "#429790" },
    22: { name: "Platinum 4", min: 3100, max: 3199, color: "#429790" },
    23: { name: "Platinum 3", min: 3200, max: 3299, color: "#429790" },
    24: { name: "Platinum 2", min: 3300, max: 3399, color: "#429790" },
    25: { name: "Platinum 1", min: 3400, max: 3499, color: "#429790" },
    26: { name: "Emerald 5", min: 3500, max: 3599, color: "#3f9e71" },
    27: { name: "Emerald 4", min: 3600, max: 3699, color: "#3f9e71" },
    28: { name: "Emerald 3", min: 3700, max: 3799, color: "#3f9e71" },
    29: { name: "Emerald 2", min: 3800, max: 3899, color: "#3f9e71" },
    30: { name: "Emerald 1", min: 3900, max: 3999, color: "#3f9e71" },
    31: { name: "Diamond 5", min: 4000, max: 4099, color: "#8472b4" },
    32: { name: "Diamond 4", min: 4100, max: 4199, color: "#8472b4" },
    33: { name: "Diamond 3", min: 4200, max: 4299, color: "#8472b4" },
    34: { name: "Diamond 2", min: 4300, max: 4399, color: "#8472b4" },
    35: { name: "Diamond 1", min: 4400, max: 4499, color: "#8472b4" },
    36: { name: "Champion", min: 4500, max: Infinity, color: "#8c2558" }
};