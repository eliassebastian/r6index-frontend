// Config For R6 Siege Ranked Ranks. Accurate as of the Commanding Force Update

type RankInfo = {
    name: string;
    min: number;
    max: number;
    color: string;
    linear: string[];
    image: string;
}

export const RankedConfig: Record<number, RankInfo> = {
    0: { name: "Unranked", min: 0, max: 0, color: "#1f1f1f", linear: ["#797979", "#a4a4a4", "#c4c4c4", "#4a4a4a"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/unranked.png?v=3" },
    1: { name: "Copper V", min: 1000, max: 1099, color: "#772a01", linear: ["#772a01", "#9c3701", "#a83a00", "#6c2600"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/copper-5.png?v=3" },
    2: { name: "Copper IV", min: 1100, max: 1199, color: "#772a01", linear: ["#772a01", "#9c3701", "#a83a00", "#6c2600"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/copper-4.png?v=3" },
    3: { name: "Copper III", min: 1200, max: 1299, color: "#772a01", linear: ["#772a01", "#9c3701", "#a83a00", "#6c2600"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/copper-3.png?v=3" },
    4: { name: "Copper II", min: 1300, max: 1399, color: "#772a01", linear: ["#772a01", "#9c3701", "#a83a00", "#6c2600"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/copper-2.png?v=3" },
    5: { name: "Copper I", min: 1400, max: 1499, color: "#772a01", linear: ["#772a01", "#9c3701", "#a83a00", "#6c2600"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/copper-1.png?v=3" },
    6: { name: "Bronze V", min: 1500, max: 1599, color: "#b5743a", linear: ["#b5743a", "#915e30", "#945823", "#794a20"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/bronze-5.png?v=3" },
    7: { name: "Bronze IV", min: 1600, max: 1699, color: "#815b31", linear: ["#b5743a", "#915e30", "#945823", "#794a20"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/bronze-4.png?v=3" },
    8: { name: "Bronze III", min: 1700, max: 1799, color: "#815b31", linear: ["#b5743a", "#915e30", "#945823", "#794a20"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/bronze-3.png?v=3" },
    9: { name: "Bronze II", min: 1800, max: 1899, color: "#815b31", linear: ["#b5743a", "#915e30", "#945823", "#794a20"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/bronze-2.png?v=3" },
    10: { name: "Bronze I", min: 1900, max: 1999, color: "#815b31", linear: ["#b5743a", "#915e30", "#945823", "#794a20"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/bronze-1.png?v=3" },
    11: { name: "Silver V", min: 2000, max: 2099, color: "#a0a0a0", linear: ["#a0a0a0", "#bababa", "#888787", "#7d7d7d"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/silver-5.png?v=3" },
    12: { name: "Silver IV", min: 2100, max: 2199, color: "#a0a0a0", linear: ["#a0a0a0", "#bababa", "#888787", "#7d7d7d"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/silver-4.png?v=3" },
    13: { name: "Silver III", min: 2200, max: 2299, color: "#a0a0a0", linear: ["#a0a0a0", "#bababa", "#888787", "#7d7d7d"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/silver-3.png?v=3" },
    14: { name: "Silver II", min: 2300, max: 2399, color: "#a0a0a0", linear: ["#a0a0a0", "#bababa", "#888787", "#7d7d7d"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/silver-2.png?v=3" },
    15: { name: "Silver I", min: 2400, max: 2499, color: "#a0a0a0", linear: ["#a0a0a0", "#bababa", "#888787", "#7d7d7d"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/silver-1.png?v=3" },
    16: { name: "Gold V", min: 2500, max: 2599, color: "#f2d200", linear: ["#ffd580", "#f0a925", "#ffe56f", "#f6b547"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/gold-5.png?v=3" },
    17: { name: "Gold IV", min: 2600, max: 2699, color: "#f2d200", linear: ["#ffd580", "#f0a925", "#ffe56f", "#f6b547"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/gold-4.png?v=3" },
    18: { name: "Gold III", min: 2700, max: 2799, color: "#f2d200", linear: ["#ffd580", "#f0a925", "#ffe56f", "#f6b547"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/gold-3.png?v=3" },
    19: { name: "Gold II", min: 2800, max: 2899, color: "#f2d200", linear: ["#ffd580", "#f0a925", "#ffe56f", "#f6b547"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/gold-2.png?v=3" },
    20: { name: "Gold I", min: 2900, max: 2999, color: "#f2d200", linear: ["#ffd580", "#f0a925", "#ffe56f", "#f6b547"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/gold-1.png?v=3" },
    21: { name: "Platinum V", min: 3000, max: 3099, color: "#429790", linear: ["#44c6ba", "#78dad1", "#0aa89a", "#308e85"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/platinum-5.png?v=3" },
    22: { name: "Platinum IV", min: 3100, max: 3199, color: "#429790", linear: ["#44c6ba", "#78dad1", "#0aa89a", "#308e85"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/platinum-4.png?v=3" },
    23: { name: "Platinum III", min: 3200, max: 3299, color: "#429790", linear: ["#44c6ba", "#78dad1", "#0aa89a", "#308e85"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/platinum-3.png?v=3" },
    24: { name: "Platinum II", min: 3300, max: 3399, color: "#429790", linear: ["#44c6ba", "#78dad1", "#0aa89a", "#308e85"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/platinum-2.png?v=3" },
    25: { name: "Platinum I", min: 3400, max: 3499, color: "#429790", linear: ["#44c6ba", "#78dad1", "#0aa89a", "#308e85"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/platinum-1.png?v=3" },
    26: { name: "Emerald V", min: 3500, max: 3599, color: "#3f9e71", linear: ["#0bde81", "#09b86b", "#16a868", "#00d678"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/emerald-5.png?v=3" },
    27: { name: "Emerald IV", min: 3600, max: 3699, color: "#3f9e71", linear: ["#0bde81", "#09b86b", "#16a868", "#00d678"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/emerald-4.png?v=3" },
    28: { name: "Emerald III", min: 3700, max: 3799, color: "#3f9e71", linear: ["#0bde81", "#09b86b", "#16a868", "#00d678"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/emerald-3.png?v=3" },
    29: { name: "Emerald II", min: 3800, max: 3899, color: "#3f9e71", linear: ["#0bde81", "#09b86b", "#16a868", "#00d678"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/emerald-2.png?v=3" },
    30: { name: "Emerald I", min: 3900, max: 3999, color: "#3f9e71", linear: ["#0bde81", "#09b86b", "#16a868", "#00d678"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/emerald-1.png?v=3" },
    31: { name: "Diamond V", min: 4000, max: 4099, color: "#8472b4", linear: ["#9576e8", "#a583ff", "#ad92f5", "#8456ff"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/diamond-5.png?v=3" },
    32: { name: "Diamond IV", min: 4100, max: 4199, color: "#8472b4", linear: ["#9576e8", "#a583ff", "#ad92f5", "#8456ff"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/diamond-4.png?v=3" },
    33: { name: "Diamond III", min: 4200, max: 4299, color: "#8472b4", linear: ["#9576e8", "#a583ff", "#ad92f5", "#8456ff"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/diamond-3.png?v=3" },
    34: { name: "Diamond II", min: 4300, max: 4399, color: "#8472b4", linear: ["#9576e8", "#a583ff", "#ad92f5", "#8456ff"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/diamond-2.png?v=3" },
    35: { name: "Diamond I", min: 4400, max: 4499, color: "#8472b4", linear: ["#9576e8", "#a583ff", "#ad92f5", "#8456ff"], image:"https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/diamond-1.png?v=3"},
    36: { 
        name: "Champion", 
        min: 4500, 
        max: Infinity, 
        color: "#8c2558", 
        linear: ["#a81754", "#d74c87", "#f42c80", "#7d0b3b"],
        image: "https://trackercdn.com/cdn/r6.tracker.network/ranks/s28/small/champions.png?v=3"
    }
};