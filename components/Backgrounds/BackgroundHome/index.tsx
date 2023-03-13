'use client';

import Image from "next/image";
import image from '../../../public/echo-bg-full.jpg';
import styles from './BackgroundHome.module.scss';

const HomeBackground = () => {
    const onLoadingComplete = (img: HTMLImageElement) => {
        img.style.opacity = "1";
    }

    return (
        <div className={styles.background}>
          <Image className={styles.image} src={image} alt={"echo background image"} fill priority onLoadingComplete={onLoadingComplete}/>
        </div>
    )
};

export default HomeBackground;