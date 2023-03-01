import { Platform } from '@/types/Platform';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


type State = {
    platform: Platform;
    setPlatform: (platform: Platform) => void
}

enum PlatformEnum {
    PC = 0,
    PS = 1,
    XBOX = 2
}

export const usePlatformStore = create<State, [["zustand/persist", State]]>(
    persist(
        (set) => ({
            platform: 0,
            setPlatform: (platform: Platform) => set({ platform: platform }),
        }),
        {
            name: 'r6index-platform',
            storage: createJSONStorage(() => localStorage)
        }
    )
)