'use client';

import { Alias } from '@/types/Player';
import { type Dispatch, type SetStateAction, useState } from 'react';
import styles from './PlayerAliases.module.scss';

interface PlayerAliasesProps {
    aliases: Alias[];
    expanded: Dispatch<SetStateAction<boolean>>;
}

const PlayerAliases = (props: PlayerAliasesProps) => {
    const [extended, setExtended] = useState(false);

    // exclude first alias (current name)
    const aliases = props.aliases.slice(1);
    if (aliases.length === 0) return null;

    const onClick = () => {
        setExtended(value => !value);
        props.expanded(value => !value);
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onClick}>
                <span className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                </span>
                <span>Aliases</span>
                {
                    extended &&
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </span>
                }
            </button>
            {
                extended &&
                <ul className={styles.aliases}>
                    {
                        props.aliases.map((alias, index) => 
                            <li key={`${alias.name}-${index}`} className={styles.alias}>
                                <span>{alias.name}</span>
                            </li>
                        )
                    }
                </ul>
            }
        </div>
    )



}

export default PlayerAliases;