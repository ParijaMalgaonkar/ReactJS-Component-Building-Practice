import React from 'react';
import styles from './Card.module.css';

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.image}></div>
            <div className={styles.cardcontent}>
                <h2 className={styles.name}>Tanya Sharma</h2>
                <div className={styles.post}><h3 className={styles.postname}>CEO and Co-Founder</h3></div>
                <h3 className={styles.content}>Lorem ipsum nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</h3>
                <div className={styles.social}>
                    <div className={styles.mediaicon}></div>
                    <div className={styles.mediaicon}></div>
                    <div className={styles.mediaicon}></div>
                    <div className={styles.mediaicon}></div>
                </div>
            </div>
            
        </div>
    )
}

export default Card;