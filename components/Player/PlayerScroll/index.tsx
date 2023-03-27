'use client';

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const PlayerScroll = () => {
    const firstLoad = useRef(true);
    const router = usePathname();

    useEffect(() => {
        if (!firstLoad.current) return;
        firstLoad.current = false;
        window.scrollTo({ top: 0 })
    }, [router])

    return null
}

export default PlayerScroll;