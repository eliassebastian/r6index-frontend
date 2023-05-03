'use client';

import { calculateBestWeapon } from "@/utils/Ubisoft";

const PlayerTest = (props: { data: any; }) => {

    console.log(props.data.data.weapons)
    console.log(calculateBestWeapon( props.data.data.weapons ) )

    return null
}

export default PlayerTest;