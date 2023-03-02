'use client';
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
    return (
        <ul className={styles.list}>
            <FavouriteItem name="spoit.koi" id="ab1ff7ae-13e4-4a6a-9b03-317285f8057b" />
            <FavouriteItem name="leongids.koi" id="661e632b-c2cd-4994-96ba-6d9ed930b941" />
            <FavouriteItem name="pengu.dz" id="f1b010e1-d441-47b1-be1f-cea6e2f22e19" />
            <FavouriteItem name="rath.-" id="eac01e72-a88c-4847-ad73-0e03ce7a1870" />
            <FavouriteItem name="EddyDTB" id="95171ef3-32d7-466f-a8ea-438b845444e3" />
            {/* <FavouriteItem name="EddyDTB" id="95171ef3-32d7-466f-a8ea-438b845444e3" />
            <FavouriteItem name="EddyDTB" id="95171ef3-32d7-466f-a8ea-438b845444e3" />
            <FavouriteItem name="EddyDTB" id="95171ef3-32d7-466f-a8ea-438b845444e3" />
            <FavouriteItem name="EddyDTB" id="95171ef3-32d7-466f-a8ea-438b845444e3" /> */}
        </ul>
    )
}

export default SearchFavourites