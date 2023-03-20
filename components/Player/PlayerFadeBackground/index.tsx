'use client';

import { useLayoutEffect, useRef } from 'react';
import styles from './PlayerFadeBackground.module.scss';

const PlayerFadeBackground = () => {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!ref.current) return;

        const handleOpacity = () => {
            if (!ref.current) return;
            // Get the scroll percentage of the element
            const scrollPercentage = Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);
            // Set the opacity of the background element
            ref.current.style.opacity = `${scrollPercentage}`;
        }

        window.addEventListener('scroll', handleOpacity);
        
        return () => {
            window.removeEventListener('scroll', handleOpacity);
        }

    }, [ref.current]);

    return (
        <div ref={ref} className={styles.element}></div>
    )
}

export default PlayerFadeBackground;