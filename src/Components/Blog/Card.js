import React from 'react';
import styles from './Card.module.css';

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.topimage}></div>
            <div className = {styles.cardcontent}>
                <div className={styles.tag}>Coding</div>
                <h2 className={styles.titletext}>This is the title of this new blog article</h2>
                <h3 className={styles.content}>Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing females so improve in picture. </h3>
                <div className = {styles.details}>
                    <div className = {styles.photo}></div>
                    <div className = {styles.deets}>
                        <h2 className = {styles.name}>Lela Pine</h2>
                        <h3 className = {styles.post}>Senior Data Scientist</h3>
                    </div>
                    <h3 className = {styles.date}>July 24, 2020</h3>
                </div>
            </div>
        </div>
    )
}

export default Card;