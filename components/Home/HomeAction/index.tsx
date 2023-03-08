'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './HomeAction.module.scss';

const SearchDialog = dynamic(() => import('@/components/Search/SearchDialogWrapper'), { ssr: false })

const HomeAction = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flex}>
                <div className={styles.image_wrapper}>
                    <Image src={ "/homeaction.png" } height={80} width={80} alt={"operator ela"} priority />
                </div>
                <SearchDialog>
                    <button className={styles.button}>
                        <span>Begin Search</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </SearchDialog>
            </div>
        </div>
    )
};

export default HomeAction;