'use client';

import type { Map } from "@/types/Maps";
import styles from "./MapsList.module.scss";
import MapsItem from "../MapsItem";

interface MapsListProps {
    data: Map[];
}

const MapsList = (props: MapsListProps) => {
    return (
        <ul className={styles.list}>
            {
                props.data.map((map, index) => <MapsItem key={map.statsDetail} index={index} data={map}/>)
            }
        </ul>
    )
}

export default MapsList;