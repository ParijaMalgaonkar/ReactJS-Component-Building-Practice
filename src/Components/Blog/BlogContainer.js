import React from 'react';
import styles from './Card.module.css';
import Card from './Card';

function BlogContainer () {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Blogs</h1>
            <div className={styles.cardss}>
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
    )
}

export default BlogContainer;