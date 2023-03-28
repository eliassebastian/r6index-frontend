'use client';

import Link from "next/link";
import { type ReactNode, MouseEvent, useRef, useCallback } from "react";
import styles from "./OverviewCard.module.scss";

interface OverviewCardProps {
    uuid: string;
    path: string;
    children: ReactNode;
}

const OverviewCard = (props: OverviewCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const onMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect(), x = event.clientX - rect.left, y = event.clientY - rect.top;

        ref.current.style.setProperty("--mouse-x", `${x}px`);
        ref.current.style.setProperty("--mouse-y", `${y}px`);
    }, []);

    return (
        <div 
            ref={ref}
            className={`${styles.card} ${styles[props.path]}`}
            onMouseMove={onMouseMove}
        >
            <div className={styles.wrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default OverviewCard;