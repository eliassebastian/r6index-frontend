import { Children } from 'react';
import styles from './HeaderHomeButton.module.scss';

interface HeaderHomeButtonProps {
    children: React.ReactNode;
    desktop?: boolean;
    isComingSoon?: boolean;
}

const HeaderHomeButton = ({ children, desktop, isComingSoon }: HeaderHomeButtonProps) => {
    return (
        <button disabled={isComingSoon} className={`${styles.list_item} ${desktop && styles.desktop}`}>
            {children}
            {
                isComingSoon &&
                <span className={styles.soon}>
                    soon
                </span>
            }
        </button>
    )
}

export default HeaderHomeButton;