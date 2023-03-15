import Link from 'next/link';
import styles from './TrendingProfile.module.scss';
import Image from 'next/image';

interface TrendingProfileProps {
    id: string;
    name: string;
}

const TrendingProfile = ({ id, name }: TrendingProfileProps) => {
    return (
        <li className={styles.item}>
            <Link href={`/player/${ id }`}>
                <div>
                    <div className={styles.img_wrapper}>
                        <Image style={{borderRadius: "100%"}} src={`https://ubisoft-avatars.akamaized.net/${ id }/default_146_146.png`} fill sizes="33vw" alt={`${ name } image`} />
                    </div>
                </div>
                <span className={styles.name}>{ name }</span>
            </Link>
        </li>
    )
}

export default TrendingProfile;