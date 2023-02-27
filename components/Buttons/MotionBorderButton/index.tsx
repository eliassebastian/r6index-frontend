'use client';

import styles from './MotionBorderButton.module.scss';

interface MotionBorderButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

const MotionBorderButton = ({ onClick, children }: MotionBorderButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <div className={styles.container}>
                <div className={styles.gradient_wrapper}>

                </div>
                <div className={styles.child_wrapper}>
                    {children}
                </div>
            </div>
        </button>
    )
}

export default MotionBorderButton