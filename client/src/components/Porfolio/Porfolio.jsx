import React from 'react'
import styles from "./Porfolio.module.css"
import foto from "../../assets/img/paisajeMarte.png"
import { TbBrandGithub } from "react-icons/tb";

const Porfolio = () => {
  return (
    <div id='porfolio' className={styles.container} >
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img className={styles.image} src={foto} alt="" />
          <div className={styles.info}>
            <h3 className={styles.title}>Henry Dogs</h3>
            <p className={styles.objetive}>Academic project</p>
            <p className={styles.description}>Design and develop a dog app that includes: authentication, searches, combined filters, and sorting. </p>
            <ul className={styles.tecList}>
              <li className={styles.objetive}>technologies:</li>
              <li className={styles.tec}>Redux.js</li>
              <li className={styles.tec}>Node.js</li>
              <li className={styles.tec}>SQL</li>
            </ul>
            <div className={styles.buttonPannel}>
            <a className={styles.gitButton} target='_blank' href="#"><TbBrandGithub /></a>
          </div>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.image} src={foto} alt="" />
          <div className={styles.info}>
            <h3 className={styles.title}>Henry Dogs</h3>
            <p className={styles.objetive}>Academic project</p>
            <p className={styles.description}>Design and develop a dog app that includes: authentication, searches, combined filters, and sorting. </p>
            <ul className={styles.tecList}>
              <li className={styles.objetive}>technologies:</li>
              <li className={styles.tec}>Redux.js</li>
              <li className={styles.tec}>Node.js</li>
              <li className={styles.tec}>SQL</li>
            </ul>
            <div className={styles.buttonPannel}>
            <a className={styles.gitButton} target='_blank' href="#"><TbBrandGithub /></a>
          </div>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.image} src={foto} alt="" />
          <div className={styles.info}>
            <h3 className={styles.title}>Henry Dogs</h3>
            <p className={styles.objetive}>Academic project</p>
            <p className={styles.description}>Design and develop a dog app that includes: authentication, searches, combined filters, and sorting. </p>
            <ul className={styles.tecList}>
              <li className={styles.objetive}>technologies:</li>
              <li className={styles.tec}>Redux.js</li>
              <li className={styles.tec}>Node.js</li>
              <li className={styles.tec}>SQL</li>
            </ul>
            <div className={styles.buttonPannel}>
            <a className={styles.gitButton} target='_blank' href="#"><TbBrandGithub /></a>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Porfolio