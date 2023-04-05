import { Operator } from "@/types/Operators";
import Image from "next/image";
import { useCallback, useRef } from "react";
import styles from "./OperatorsGridItem.module.scss";

interface OperatorsGridItemProps {
    data: Operator;
}

const OperatorsGridItem = (props: OperatorsGridItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const onMouseEnter = useCallback(() => {
        if (!ref.current || !cardRef.current) return;

        const timeout = setTimeout(() => {
            if (!ref.current || !cardRef.current) return;

            cardRef.current.classList.add(styles.hover);

            const parentRect = ref.current.getBoundingClientRect();
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const parentPosLeft = parentRect.left;
            const parentPosTop = parentRect.bottom;
            const cardWidth = cardRef.current.clientWidth;
            const cardHeight = cardRef.current.clientHeight;

            // initial position of card
            let cardX = (parentRect.width / 2) - (cardRef.current.clientWidth / 2);
            let cardY = (parentRect.height / 2) - (cardRef.current.clientHeight / 2);

            //check if card will be out of screen to the right
            if (parentPosLeft + cardWidth > screenWidth) {
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
                <h1>test</h1>
            </div>
        </div>
    )
}

export default OperatorsGridItem;