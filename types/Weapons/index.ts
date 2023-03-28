
export type Weapons = {
    all: WeaponsAll;
}

export type WeaponsAll = {
    weaponSlots: WeaponSlots;
}

export type WeaponSlots = {
    secondaryWeapons: AryWeapons;
    primaryWeapons:   AryWeapons;
}

export type AryWeapons = {
    weaponTypes: WeaponType[];
}

export type WeaponType = {
    weaponType: string;
    weapons:    Weapon[];
}

export type Weapon = {
    weaponName:          string;
    roundsPlayed:        number;
    roundsWon:           number;
    roundsLost:          number;
    kills:               number;
    headshots:           number;
    headshotAccuracy:    number;
    roundsWithAKill:     number;
    roundsWithMultiKill: number;
    weaponType         : string;
    weaponCategory     : string;
}