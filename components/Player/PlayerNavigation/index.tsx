'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicEffect';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './PlayerNavigation.module.scss';

const PlayerNavigationTabs: { [key: string]: [ string, number ] } = {
    "overview": [ "Overview", 0 ],
    "summary": [ "Summary", 1 ],
    "operators": [ "Operators", 2 ],
    "maps": [ "Maps", 3 ],
    "weapons": [ "Weapons", 4 ],
    "trends": [ "Trends", 5 ]
}

const PlayerNavigation = (props: { slug: string }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const navigationRef = useRef<HTMLUListElement>(null);
    const tabRef = useRef<HTMLDivElement>(null);
    const selectedSegment = useSelectedLayoutSegment();
    const href = `/player/${props.slug}`;
    const [tab, setTab] = useState(0);

    // Handle mobile navigation bar on scroll
    useEffect(() => {
        let lastScrollPosition = window.pageYOffset;

        const scroll = (e: Event) => {
            if (!containerRef.current || window.innerWidth > 1023) return;
      
            const currentScrollPosition = window.pageYOffset;
            const isAtBottom = (window.innerHeight + currentScrollPosition) >= document.body.offsetHeight;
      
            if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
              containerRef.current.style.bottom = '0px';
            } else if (currentScrollPosition < lastScrollPosition && !isAtBottom) {
              containerRef.current.style.bottom = '-54.5px';
            }
      
            lastScrollPosition = currentScrollPosition;
          };

        window.addEventListener("scroll", scroll);

        return () => {
            window.removeEventListener("scroll", scroll);
        }
    }, [])

    // Update tab on segment change
    useIsomorphicLayoutEffect(() => {
        const active = selectedSegment === null ? "overview" : selectedSegment;
        const tab = PlayerNavigationTabs[active];
        setTab(tab[1]);
    }, [selectedSegment])

    // Update tab position
    useIsomorphicLayoutEffect(() => {
        if (!tabRef.current || !navigationRef.current) return;
        const btn = navigationRef.current.children[tab] as HTMLAnchorElement;
        tabRef.current.style.transform = `translate(${btn.offsetLeft}px, 10px)`;
        tabRef.current.style.width = `${btn.offsetWidth}px`;
        tabRef.current.style.height = `${btn.offsetHeight}px`;
    }, [tab])

    // Overview / Summary / Operators / Maps / Weapons / Trends
    return (
        <div ref={containerRef} className={styles.navigation}>
            <div ref={tabRef} className={styles.background_tab}>
            </div>
            <ul ref={navigationRef} className={styles.navigation_list}>
                <Link href={`${href}`} className={`${ styles.link } ${ selectedSegment === null && styles.active }`} onMouseEnter={() => { setTab(0) }}>
                    Overview
                </Link>
                <Link href={`${href}/summary`} className={`${ styles.link } ${ selectedSegment === "summary" && styles.active }`} onMouseEnter={() => { setTab(1) }}>
                    Summary
                </Link>
                <Link href={`${href}/operators`} className={`${ styles.link } ${ selectedSegment === "operators" && styles.active }`} onMouseEnter={() => { setTab(2) }}>
                    Operators
                </Link>
                <Link href={`${href}/maps`} className={`${ styles.link } ${ selectedSegment === "maps" && styles.active }`} onMouseEnter={() => { setTab(3) }}>
                    Maps
                </Link>
                <Link href={`${href}/weapons`} className={`${ styles.link } ${ selectedSegment === "weapons" && styles.active }`} onMouseEnter={() => { setTab(4) }}>
                    Weapons
                </Link>
                <Link href={`${href}/trends`} className={`${ styles.link } ${ selectedSegment === "trends" && styles.active }`} onMouseEnter={() => { setTab(5) }}>
                    Trends
                </Link>
            </ul>
        </div>
    )
}

export default PlayerNavigation;