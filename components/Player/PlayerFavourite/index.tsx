'use client';

import { useFavoritePlayerStore } from '@/stores/FavouritePlayers';
import { useEffect, useRef } from 'react';
import styles from './PlayerFavourite.module.scss';

interface PlayerFavouriteProps {
    id: string;
    name: string;
}

const PlayerFavourite = (props: PlayerFavouriteProps) => {

    const initialRender = useRef(true);
    const [ favouritePlayers, addFavouritePlayer, removeFavouritePlayer, updateFavouritePlayer ] = useFavoritePlayerStore(state => [
        state.favouritePlayers, 
        state.addFavouritePlayer, 
        state.removeFavouritePlayer, 
        state.updateFavouritePlayer]
    );

    const isFavourite = favouritePlayers.find(player => player.id === props.id);

    const onClick = () => {
        if (isFavourite) {
            removeFavouritePlayer(props.id);
            return 
        } 

        if (favouritePlayers.length >= 5) {
            return
        }

        addFavouritePlayer({ id: props.id, name: props.name, platform: "uplay" });
    }

    useEffect(() => {
        if (!initialRender.current) return 
        initialRender.current = false;
        isFavourite && isFavourite.name !== props.name && updateFavouritePlayer({ id: props.id, name: props.name, platform: "uplay" });
    }, [])

    return (
        <button className={styles.button} onClick={onClick}>
            <span className={styles.icon}>
                <svg style={{ "fill": isFavourite ? "#f8f6ee" : "transparent" }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
            </span>
            <span className={styles.text}>{ isFavourite ? "Favourited" : "Favourite" }</span>
        </button>
    )
}

export default PlayerFavourite;