import React from 'react';
import styles from './Card.module.css';
import Card from './Card';

function TestimonialContainer () {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Testimonials</h1>
            <div className={styles.cardss}>
                <Card className={styles.contcard}/>
                <Card className={styles.contcard}/>
                <Card className={styles.contcard}/>
            </div>
        </div>
    )
}

export default TestimonialContainer;