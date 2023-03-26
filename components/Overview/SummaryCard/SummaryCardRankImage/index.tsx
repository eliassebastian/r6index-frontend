import Image from "next/image";
import { MouseEvent, useRef } from "react";
import styles from "./SummaryCardRankImage.module.scss";

interface SummaryCardRankImageProps {
    rank: number;
    topPosition: number;
}

const SummaryCardRankImage = (props: SummaryCardRankImageProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current || !imageRef.current) return;

        const { clientX, clientY } = e;

        var rect = ref.current.getBoundingClientRect();
        var x = clientX - rect.left;
        var y = clientY - rect.top;

        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        var deltaX = (x - centerX) / centerX;
        var deltaY = (y - centerY) / centerY;

        var rotationStrength = 20;
        var rotationY = rotationStrength * deltaX;
        var rotationX = -rotationStrength * deltaY;

        var translationStrength = 10;
        var translationX = translationStrength * deltaX;
        var translationY = translationStrength * deltaY;

        ref.current.style.transform = `translate(${translationX}px, ${translationY}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        imageRef.current.style.transform = `perspective(1000) translate(${translationX}px, ${translationY}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.1)`;
    }

    const onMouseLeave = () => {
        if (!ref.current || !imageRef.current) return;
        ref.current.style.transform = `perspective(1000px) translate(0px, 0px) rotateX(0deg) rotateY(0deg)`;
        imageRef.current.style.transform = `perspective(1000px) translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)`;
    }

    return (
        <div className={styles.image} ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <Image ref={imageRef} src={"https://trackercdn.com/cdn/r6.tracker.network/ranks/champion-ranks/1000.png?v=3"} width={64} height={64} alt={"current rank"}/>
        </div>
    )
}

export default SummaryCardRankImage;