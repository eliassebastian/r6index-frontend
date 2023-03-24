'use client';
import { useFavoritePlayerStore } from "@/stores/FavouritePlayers";
import Image from "next/image";
/*
let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
*/

import Link from "next/link";
import styles from "./SearchFavourites.module.scss";

interface FavouriteItemProps {
    name: string;
    id: string;
}

const FavouriteItem = (props: FavouriteItemProps) => {
    //TODO: INSTEAD OF NAME USE TOOLTIP WITH NAME
    return (
        <li className={styles.item}>
            <Link href={`/player/${ props.id }`}>
                <div>
                    <div className={styles.img_wrapper}>
                        <Image style={{borderRadius: "100%"}} src={`https://ubisoft-avatars.akamaized.net/${props.id}/default_146_146.png`} fill sizes="33vw" alt={`${props.name} image`} />
                    </div>
                </div>
                <span className={styles.name}>{props.name}</span>
            </Link>
        </li>
    )
}

const SearchFavourites = () => {
    const favouritePlayers = useFavoritePlayerStore((state) => state.favouritePlayers);

    return (
        <ul className={styles.list}>
            {favouritePlayers.map((player) => <FavouriteItem key={player.id} name={player.name} id={player.id} />)}
        </ul>
    )
}

export default SearchFavourites