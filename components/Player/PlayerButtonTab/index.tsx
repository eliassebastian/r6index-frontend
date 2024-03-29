'use client';

import { Alias } from "@/types/Player";
import styles from "./PlayerButtonTab.module.scss";
import dynamic from "next/dynamic";
import PlayerAliases from "../PlayerAliases";
import PlayerUpdate from "../PlayerUpdate";
import { useState } from "react";

const PlayerFavourite = dynamic(() => import("@/components/Player/PlayerFavourite"), { ssr: false });

interface PlayerButtonTabProps {
    id: string;
    platform: string;
    nickname: string;
    aliases: Alias[];
    mobile?: boolean;
    lastUpdate: number;
}

export const PlayerButtonTab = (props: PlayerButtonTabProps) => {
    const [activeTab, setActiveTab] = useState(false);
    return (
        <div className={styles.tabs}>
            {!props.mobile && !activeTab && <PlayerUpdate id={props.id} platform={props.platform} lastUpdate={props.lastUpdate} />}
            <PlayerAliases aliases={props.aliases} expanded={setActiveTab}/>
            {!props.mobile && !activeTab && <PlayerFavourite id={props.id} name={props.nickname} />}
        </div>
    )
}

export const PlayerButtonTabMobile = (props: PlayerButtonTabProps) => {
    return (
        <div className={styles.tabsmobile}>
            <PlayerUpdate id={props.id} platform={props.platform} lastUpdate={props.lastUpdate} />
            <PlayerFavourite id={props.id} name={props.nickname} />
        </div>
    )
}

