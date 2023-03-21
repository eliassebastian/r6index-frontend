import { FavouritePlayer } from "@/types/FavouritePlayer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


type State = {
    favouritePlayers: FavouritePlayer[];
    addFavouritePlayer: (player: FavouritePlayer) => void;
    removeFavouritePlayer: (player: string) => void;
    updateFavouritePlayer: (player: FavouritePlayer) => void;
}

const MaxFavouritePlayers = 6;

export const useFavoritePlayerStore = create<State, [["zustand/persist", State]]>(
    persist(
        (set) => ({
            favouritePlayers: [],
            // check if limit is reached and add a player to the list
            addFavouritePlayer: (player: FavouritePlayer) => set(state => {
                if (state.favouritePlayers.length >= MaxFavouritePlayers) {
                    // cancel state change if max is reached
                    return state
                }
                return { favouritePlayers: [...state.favouritePlayers, player] };
            }),
            // remove a player from the list
            removeFavouritePlayer: (playerId: string) => set(({ favouritePlayers }) => {
                return {
                    favouritePlayers: favouritePlayers.filter((player) => player.id !== playerId)
                }
            }),
            // update a player in the list if it already exists
            updateFavouritePlayer: (updatedPlayer: FavouritePlayer) => set(({ favouritePlayers }) => {
                return {
                    favouritePlayers: favouritePlayers.map((player) => player.id === updatedPlayer.id ? updatedPlayer : player)
                }
            })
        }),
        {
            name: 'r6index-favouriteplayers',
            storage: createJSONStorage(() => localStorage)
        }
    )
);

