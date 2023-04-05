import { operatorsConfig } from "@/configs/Operators";
import { Operator } from "@/types/Operators";
import Image from "next/image";
import { useCallback, useRef } from "react";
import styles from "./OperatorsGridItem.module.scss";
import { convertNumberToTwoDecimals } from "@/utils/Numbers";

interface OperatorsGridItemProps {
    data: Operator;
}

const OperatorsGridItem = (props: OperatorsGridItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const operatorConfig = operatorsConfig[props.data.statsDetail];

    const onMouseEnter = useCallback(() => {
        if (!ref.current || !cardRef.current) return;

        const timeout = setTimeout(() => {
            if (!ref.current || !cardRef.current) return;

            cardRef.current.classList.add(styles.hover);

            const parentRect = ref.current.getBoundingClientRect();
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const containerWidth = ref.current.parentElement?.clientWidth || 0;
            const parentPosLeft = parentRect.left;
            const parentPosTop = parentRect.bottom;
            const cardWidth = cardRef.current.clientWidth;
            const cardHeight = cardRef.current.clientHeight;

            // initial position of card depending on screen size
            let cardX = screenWidth > 1023 ? (parentRect.width / 2) - (cardWidth / 2) : (screenWidth / 2) - (cardRef.current.offsetWidth / 2);
            let cardY = screenWidth > 1023 ? (parentRect.height / 2) - (cardRef.current.clientHeight / 2) : (screenHeight / 2) - (cardRef.current.offsetHeight / 2);

            if (cardWidth > 1023) {
                // check if card will be out of screen to the right
                if (parentPosLeft + cardWidth > containerWidth) {
                    cardX = parentRect.width - cardWidth;
                }
                //check if card will be out of screen on the left
                if (parentPosLeft - cardHeight < 0) {
                    cardX = 0;
                }
                // check if card will be out of screen at the bottom
                if (parentPosTop + cardHeight > screenHeight) {
                    cardY = parentRect.height - cardHeight;
                }
                // check if card will be out of screen at the top
                if (parentPosTop - cardHeight < 0) {
                    cardY = 0;
                }
            }
        
            cardRef.current.style.left = `${cardX}px`;
            cardRef.current.style.top = `${cardY}px`;
        }, 500);

        timeoutRef.current = timeout;
    }, []);

    const onMouseLeave = () => {
        timeoutRef.current && cardRef.current?.classList.remove(styles.hover);
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }
    
    return (
        <div className={styles.container} ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={styles.img_wrapper}>
                <div className={styles.background}></div>
                <Image className={styles.img} src={`/icons/operators/${props.data.statsDetail}.svg`} alt={`/${props.data.statsDetail} icon`} sizes={"33vw"} fill/> 
            </div>
            <div ref={cardRef} className={styles.card}>
                <div className={styles.banner}>
                    {/* <h2 className={styles.title}>{props.data.statsDetail}</h2> */}
                    <div className={styles.banner_bg}>
                        <Image className={styles.img} src={operatorConfig.large} alt={`${ props.data.statsDetail } banner image`} sizes={"33vw"} fill priority />
                    </div>
                    <div className={styles.operator}>
                        <h2 className={styles.title}>{props.data.statsDetail}</h2>
                    </div>
                </div>
                <ul className={styles.grid}>
                    <li className={styles.grid_item}>
                        <h3 className={styles.grid_title}>Win/Loss</h3>
                        <span className={styles.grid_stat}>{convertNumberToTwoDecimals( props.data.roundsWon / props.data.roundsPlayed * 100, 1)}%</span>
                    </li>
                    <li className={styles.grid_item}>
                        <h3 className={styles.grid_title}>K/D</h3>
                        <span className={styles.grid_stat}>{convertNumberToTwoDecimals(props.data.killDeathRatio.value)}</span>
                    </li>
                    <li className={styles.grid_item}>
                        <h3 className={styles.grid_title}>KOST</h3>
                        <span className={styles.grid_stat}>{convertNumberToTwoDecimals(props.data.roundsWithKOST.value * 100)}%</span>
                    </li>
                    <li className={styles.grid_item}>
                        <h3 className={styles.grid_title}>KPR</h3>
                        <span className={styles.grid_stat}>{convertNumberToTwoDecimals(props.data.roundsWithAKill.value * 100)}%</span>
                    </li>
                    <li className={styles.grid_item}>
                        <h3 className={styles.grid_title}>Headshots</h3>
                        <span className={styles.grid_stat}>{convertNumberToTwoDecimals(props.data.headshotAccuracy.value * 100)}%</span>
                    </li>
                    <li className={styles.grid_item}>
                        <h3 className={styles.grid_title}>Rounds Survived</h3>
                        <span className={styles.grid_stat}>{convertNumberToTwoDecimals(props.data.roundsSurvived.value * 100)}%</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OperatorsGridItem;