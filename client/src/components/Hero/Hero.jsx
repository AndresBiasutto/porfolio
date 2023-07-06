import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cartel}>
                <div className={styles.titles}>
                    <h1 className={styles.title}><span className={styles.blink}>A</span>nderes <span className={styles.blink}>B</span>iasutto</h1>
                    <p className={styles.subTitle} ><span className={styles.blink}>F</span>ull  <span className={styles.blink}>S</span>tack  dev</p>
                </div>
                <div className={styles.design}>
                    <img className={styles.image} src="https://avatars.githubusercontent.com/u/70040532?v=4" alt="" />
                </div>
            </div>
            <button className={styles.button} >hablemos!</button>
        </div>
    )
}

export default Hero