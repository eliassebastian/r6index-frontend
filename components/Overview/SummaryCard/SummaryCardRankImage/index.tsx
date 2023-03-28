'use client';

import Image from "next/image";
import { MouseEvent, useRef } from "react";
import styles from "./SummaryCardRankImage.module.scss";

interface SummaryCardRankImageProps {
    rank: number;
    topPosition: number;
    img: string;
    gradient: string;
}

const SummaryCardRankImage = (props: SummaryCardRankImageProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const imgSrc = props.rank === 36 && props.topPosition !== 0 ? `https://trackercdn.com/cdn/r6.tracker.network/ranks/champion-ranks/${props.topPosition}.png?v=3` : props.img

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current || !imageRef.current) return;

        const { clientX, clientY } = e;

        const rect = ref.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const rotationStrength = 20;
        const rotationY = rotationStrength * deltaX;
        const rotationX = -rotationStrength * deltaY;

        const translationStrength = 10;
        const translationX = translationStrength * deltaX;
        const translationY = translationStrength * deltaY;
        
        ref.current.style.setProperty('--rotationX', `${rotationX}deg`);
        ref.current.style.setProperty('--rotationY', `${rotationY}deg`);
        ref.current.style.setProperty('--translationX', `${translationX}px`);
        ref.current.style.setProperty('--translationY', `${translationY}px`);
    }

    const onLoadingComplete = (img: HTMLImageElement) => {
        img.style.opacity = "1";
    }

    return (
        <div className={styles.image} ref={ref} onMouseMove={onMouseMove}>
            <div style={{ background: props.gradient }} className={styles.glow}></div>
            <div ref={imageRef} className={styles.img_wrapper}>
                <Image src={imgSrc} fill alt={"current rank"} onLoadingComplete={onLoadingComplete}/>
            </div>
        </div>
    )
}

export default SummaryCardRankImage;