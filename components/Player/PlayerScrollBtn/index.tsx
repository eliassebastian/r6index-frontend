'use client';

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicEffect";
import { useRef, useState } from "react";
import styles from "./PlayerScrollBtn.module.scss";

const PlayerScrollBtn = () => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [scrollState, setScrollState] = useState(false);
    
    const onClick = () => {
        if (!btnRef.current) return;

        const container = btnRef.current.parentElement?.parentElement?.parentElement;
        if (!container) return;

        if (!scrollState) {
            window.scrollTo({ top: container.offsetTop - 100, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        setScrollState(value => !value);
    }

    useIsomorphicLayoutEffect(() => {
        if (!btnRef.current) return;

        const scroll = () => {
            if (window.innerWidth < 1024) return
            const container = btnRef.current?.parentElement?.parentElement?.parentElement as HTMLDivElement;
            const newState = (container.offsetTop / 2) < window.pageYOffset;   
            setScrollState(newState);
        }

        window.addEventListener("scroll", scroll);
        
        return () => {
            window.removeEventListener("scroll", scroll);
        }
    }, [])

    return (
        <button ref={btnRef} onClick={onClick} className={styles.btn}>
            {scrollState ? "Hide Details" : "View Details"}
            <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.icon} ${ scrollState && styles.rotate }`} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
            </svg>
        </button>
    )
}

export default PlayerScrollBtn;