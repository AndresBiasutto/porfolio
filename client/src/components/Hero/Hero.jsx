import React from 'react'
import styles from "./Hero.module.css"
import { Link } from 'react-scroll';
import { FaFilePdf } from "react-icons/fa"
import cvEng from "../../assets/CV Andrés Biasutto eng.pdf"
import cvSpa from "../../assets/CV Andrés Biasutto.pdf"

const Hero = () => {
    return (
        <div id='hero' className={styles.container}>
            <div className={styles.cartel}>
                <div className={styles.design}>
                    <img className={styles.image} src="https://avatars.githubusercontent.com/u/70040532?v=4" alt="" />
                </div>
                <div className={styles.titles}>
                    <h1 className={styles.title}><span className={styles.blink}>A</span>nderes <span className={styles.blink}>B</span>iasutto</h1>
                    <p className={styles.subTitle} ><span className={styles.blink}>F</span>ull  <span className={styles.blink}>S</span>tack  dev</p>
                    <div className={styles.buttonPannel}>
                        <Link to="contact" smooth={true} duration={700} className="button" >Get in touch!</Link>
                        <div className={styles.buttonDownload} >
                            Download my cv
                            <div className={styles.pdfcontainer}>
                                <a className={styles.pdfDownload} download={cvEng} href={cvEng}><FaFilePdf className={styles.ico} /> spa</a>
                                <a className={styles.pdfDownload} download={cvSpa} href={cvSpa}><FaFilePdf className={styles.ico} /> eng</a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hero