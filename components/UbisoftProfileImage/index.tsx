'use client';

import Image from "next/image"
import styles from './UbisoftProfileImage.module.scss';

const UbisoftProfileImage = (props: { profileId: string, large: boolean  }) => {
    const onLoadingComplete = (img: HTMLImageElement) => {
        img.style.opacity = "1";
    }

    return <Image className={styles.img} onLoadingComplete={onLoadingComplete} src={`https://ubisoft-avatars.akamaized.net/${ props.profileId }/default_${props.large ? "256_256" : "146_146"}.png`} fill priority sizes="33vw" alt={`${ props.profileId } profile image`} />
}

export default UbisoftProfileImage;