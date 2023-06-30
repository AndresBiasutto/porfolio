import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titles}>
                <h1>Anderes Biasutto</h1>
                <p>full stack dev</p>
            </div>
            <div className={styles.design}>
                <img className={styles.image} src="https://avatars.githubusercontent.com/u/70040532?v=4" alt="" />
                <button className={styles.button} >hablemos!</button>
            </div>
        </div>
    )
}

export default Hero