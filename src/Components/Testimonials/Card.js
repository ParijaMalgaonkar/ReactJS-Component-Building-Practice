import React from 'react';
import styles from './Card.module.css';
import Icon from '@material-ui/core/Icon';

function Card() {
    return (
        <div className = {styles.card}>
            <div className = {styles.details}>
                <div className = {styles.photo}></div>
                <div className = {styles.deets}>
                    <h2 className = {styles.name}>Tony Philipes</h2>
                    <h3 className = {styles.post}>Senior Data Scientist</h3>
                </div>
            </div>
            <h2 className = {styles.name}>Helped me improve my chances</h2>
            <div className = {styles.tagcont}>
                <div className = {styles.tags}><h3 className ={styles.post}>Tag1</h3></div>
                <div className = {styles.tag2}><h3 className ={styles.post}>Tag1</h3></div>
                <div className = {styles.tag3}><h3 className ={styles.post}>Tag1</h3></div>
                <div className = {styles.tag3}><h3 className ={styles.post}>Tag1</h3></div>
            </div>
            <h3 className = {styles.content}>Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad inim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</h3>
            <h3 className = {styles.post}>Read More <Icon className="long-arrow-alt-right" /></h3>
        </div>
    )
}

export default Card;