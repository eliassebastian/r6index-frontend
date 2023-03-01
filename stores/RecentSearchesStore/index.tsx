import type { RecentSearch } from '@/types/RecentSearch';
import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
    searches: RecentSearch[];
    addSearch: (search: RecentSearch) => void;
}

const MaxRecentSearches = 10;

const useRecentSearchesStore = create<State, [["zustand/persist", State]]>(
    persist(
        (set) => ({
            searches: [],
            addSearch: (search: RecentSearch) => set(({ searches }) => {
                //check whether exists - if so, remove it so that it can be added to the front
                const filtered = searches.filter((s) => s.id !== search.id && s.platform !== search.platform).slice(0, MaxRecentSearches - 1);
                filtered.unshift(search);

                return {
                    searches: filtered
                }
            })
        }),
        {
            name: 'r6index-recentsearches',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export { useRecentSearchesStore, MaxRecentSearches };