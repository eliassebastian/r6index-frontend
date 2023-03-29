'use client';

import HeaderHomeButton from "@/components/Buttons/HeaderHomeButton";
import Logo from "@/components/Logo";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState, useTransition } from "react";
import styles from "./HeaderHome.module.scss";


const SearchDialog = dynamic(() => import('@/components/Search/SearchDialogWrapper'), { ssr: false })
const SearchBar = dynamic(() => import('@/components/Search/SearchBar'), { ssr: false })

interface HeaderHomeProps {
    children?: React.ReactNode;
}

const pageColors = new Map<string, [string, string]>([
    ["", ["#f8f6ee", "#732c2f"]],
    ["search", ["#3E403D", "#A2A69F"]],
    ["player", ["#f8f6ee", "#732c2f"]]
]);

const HeaderHome = ({ children }: HeaderHomeProps) => {

    const listRef = useRef<HTMLUListElement>(null);
    const [, startTransition] = useTransition();
    const [color, setColor] = useState<[string, string]>(["#f8f6ee", "#732c2f"]);
    const pathname = usePathname();
    
    useLayoutEffect(() => {
        if (!pathname) return;
        const path = pathname.split("/")[1];
        const color = pageColors.get(path);
        if (color) {
            startTransition(() => {
                if (!listRef.current) return;
                listRef.current.style.color = color[0];
                setColor(color);
            })
        }
    }, [pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.row}>
                <Link className={styles.logo} href={"/"} scroll>
                    <Logo full color={color[0]} background={color[1]}/>
                </Link>
                {
                    (pathname && (pathname === "/search" || pathname.startsWith("/player"))) &&
                    <div className={styles.flex}>
                        <div className={styles.searchbar}>
                            <SearchBar/>
                        </div>
                    </div>
                }
            </div>
            <nav ref={listRef} className={styles.list} style={ { color: color[0] } }>
                {
                    (pathname && (pathname === "/search" || pathname.startsWith("/player"))) &&
                    <div className={styles.xl_hide}>
                        <SearchDialog>
                            {/* <HeaderHomeButton desktop> */}
                            <button className={styles.button}>
                                <div className={styles.searchplayerbtn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                    </svg>
                                    Search Player
                                </div>
                            </button>
                        </SearchDialog>
                    </div>
                }
                <Link href={"/"} className={`${styles.button} ${styles.desktop} ${styles.disabled}`}>
                    Leaderboard
                    <span className={styles.soon}>
                        soon
                    </span>
                </Link>
                <Link href={"/"} className={`${styles.button} ${styles.desktop} ${styles.disabled}`}>
                    Analytics
                    <span className={styles.soon}>
                        soon
                    </span>
                </Link>
                <HeaderHomeButton desktop>
                    <svg aria-label="twitter" fill="currentColor" width="19" viewBox="0 0 40 40">
                        <path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"/>
                    </svg>
                </HeaderHomeButton>
                <HeaderHomeButton desktop>
                    <svg aria-label="github" height="19" viewBox="0 0 14 14" width="19"><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="currentColor" fillRule="nonzero"/></svg>
                </HeaderHomeButton>
            </nav>
        </header>
    );
};

export default HeaderHome;