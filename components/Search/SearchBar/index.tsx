'use client';

import { usePlatformStore } from "@/stores/PlatformStore";
import type { Platform } from "@/types/Platform";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import styles from './SearchBar.module.scss';

interface SearchBarProps {
    onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const platformsRef = useRef<HTMLDivElement>(null);
    const platformBgRef = useRef<HTMLDivElement>(null);
    const [search, setSearch] = useState('');
    const [ platform, setPlatform ] = usePlatformStore((state) => [ state.platform, state.setPlatform ]);

    const clearSearch = () => {
        search.length > 0 && setSearch('');
        inputRef.current?.focus();
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //	uuidRule = regexp.MustCompile(`^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$`)
        e.preventDefault();
        console.log(search);
    }

    const closeDialog = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClose && onClose();
    }, [])

    const onPlatformBtnClick = (e: React.MouseEvent<HTMLButtonElement>, platform: Platform) => {
        e.preventDefault();
        setPlatform(platform);
    }

    //platform tabs animation
    useLayoutEffect(() => {
        if (!platformBgRef.current || !platformsRef.current) return;

        const btn = platformsRef.current?.children[platform] as HTMLButtonElement;
        platformBgRef.current.style.transform = `translateX(${btn.offsetLeft}px`;
        platformBgRef.current.style.width = `${btn.offsetWidth}px`;
        platformBgRef.current.style.height = `${btn.offsetHeight}px`;

    }, [platform]);

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <button className={styles.back_btn} onClick={closeDialog}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                </svg>
            </button>
            <input 
                ref={inputRef} 
                className={styles.input}
                required={true}
                type="text" 
                value={search} 
                onChange={e => setSearch(e.target.value)}
                placeholder="Search Player Name/ID"
                maxLength={50}
                autoComplete={"off"}
                autoCorrect={"off"}
                autoCapitalize={"off"}
                spellCheck={"false"}
            />
            {
                search.length > 0 &&
                <div className={styles.clearbtn_wrapper}>
                    <button className={styles.clear_btn} onClick={clearSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                </div>
            }
            <div className={styles.platforms}>
                <div ref={platformBgRef} className={styles.platform_bg}></div>
                <div ref={platformsRef} className={styles.platforms}>
                    <button className={styles.platform_btn} style={{opacity: platform === 0 ? 0.9 : 0.75, color: platform === 0 ? "#1c1c1c" : ""}} onClick={ (e) => { onPlatformBtnClick(e, 0) } }>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4875 4875" fill="currentColor">
                            <path d="M0 0h2311v2310H0zm2564 0h2311v2310H2564zM0 2564h2311v2311H0zm2564 0h2311v2311H2564"/>
                        </svg>
                    </button>
                    <button disabled className={styles.platform_btn} style={{opacity: platform === 1 ? 0.9 : 0.75, color: platform === 1 ? "#1c1c1c" : ""}} onClick={ (e) => { onPlatformBtnClick(e, 1) }}>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                            <path d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"/>
                        </svg>
                    </button>
                    <button disabled className={styles.platform_btn} style={{opacity: platform === 2 ? 0.9 : 0.75, color: platform === 2 ? "#1c1c1c" : ""}} onClick={ (e) => { onPlatformBtnClick(e, 2) }}>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SearchBar;
