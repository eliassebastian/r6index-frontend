
import type { Map } from "@/types/Maps";
import styles from "./MapsItem.module.scss";
import { useRef } from "react";
import Image from "next/image";
import { MapConfig } from "@/configs/Maps";
import { removeSubstring } from "@/utils/Numbers";

interface MapsItemProps {
    index: number;
    data: Map;
}

const MapsItem = (props: MapsItemProps) => {
    const ref = useRef<HTMLLIElement>(null);

    const mapConfig = MapConfig[props.data.statsDetail];
    if (!mapConfig) return null;

    const onClick = () => {
        if (!ref.current || !ref.current.parentElement) return;

        // check if current already has class
        const hasClass = ref.current.classList.contains(styles.list_item_active);
        if (hasClass) return;

        Array.from(ref.current.parentElement.children).forEach((child) => {
            child.classList.remove(styles.list_item_active);
        })

        ref.current.classList.add(styles.list_item_active);
    }

    return (
        <li ref={ref} onClick={onClick} className={`${styles.list_item} ${props.index === 0 && styles.list_item_active}`}>
            <Image 
                className={styles.list_image} 
                src={mapConfig.image} 
                alt={`${props.data.statsDetail} map background image`} 
                fill
                sizes="33vw"
                onLoadingComplete={(img) => {img.style.opacity = "1"}}
            />
            <button className={styles.list_btn}>
               <div className={styles.list_overview}>
                    <div className={styles.list_number}>
                        <span>{props.index + 1}</span>
                    </div>
                    <span className={styles.list_title}>{removeSubstring(props.data.statsDetail, "V2")}</span>
               </div>
            </button>
            



            {/* <h2 style={{width: "100%", height: "100%"}}>
                <button 
                className={styles.list_btn}
                aria-expanded="true"
                >
                    <span className={styles.list_number}>{props.index}</span>
                    <span className={styles.list_title}>{props.data.statsDetail}</span>
                </button>
            </h2>
            <div 
            className={styles.list_content} 
            aria-hidden="false"
            role="region">
                <Image className={styles.list_image} src={mapConfig.image} alt={`${props.data.statsDetail} map background image`} fill/>
            </div> */}
        </li>
    )
}

export default MapsItem;