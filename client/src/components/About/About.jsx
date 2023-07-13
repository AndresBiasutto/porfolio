import React from 'react'
import styles from "./About.module.css"
import { Parallax } from "react-parallax"
import { TbBrandReact, TbBrandRedux, TbBrandGit, TbBrandMongodb, TbSql, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandLinkedin, TbMailAi } from "react-icons/tb";
import { BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoGit, BiLogoPostgresql, BiLogoMongodb, BiLogoFigma, BiLogoGithub, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiGitBranch } from "react-icons/bi"
import satelite from "../../assets/img/comunications.png"
import estrellas from "../../assets/img/starsLarge.png"
import ciudad from "../../assets/img/cityBig.png"

const About = () => {
    return (
        <div className={styles.container}>

            <Parallax
                className={styles.neonWall}
                bgImage={estrellas}
                blur={{ max: 30, min: -40 }}
                strength={300}
                renderLayer={(percentage) => (
                    <div id='about' className={styles.charts}>
                        <img src={satelite} className={styles.satelite} alt="" style={{ transform: `translateY(${percentage * 30}%)` }} />
                        <img src={ciudad} className={styles.ciudad} alt="" style={{ transform: `translateY(-${percentage * 20}%)` }} />
                        <div className={styles.chart} style={{ transform: `translate(-${percentage * 172}%, -50%)` }}>
                            <div className={styles.texts}>
                                <h2 className={styles.textTitle}>About me</h2>
                                <p className={styles.textText}>Hello! I'm Andrés Biasutto, a Full Stack developer. My focus is on JavaScript, Node.js, React.js, Redux.js, Express.js, HTML, CSS, and SQL. I also have experience with Angular, PostgreSQL, MongoDB, Mongoose, and Tailwind.
                                    I worked at Social Media Lab, a startup, where I participated in frontend and backend development. I gained valuable experience and understood the importance of teamwork in dynamic environments. In addition to my technical skills, I possess soft skills such as empathy, creativity, constant learning, and adaptability.
                                    I also have knowledge in UX/UI design and previous experience as a web designer in WordPress.
                                    I'm looking for exciting opportunities to apply my knowledge and experience in development and design. If you're interested in working together or want to learn more, feel free to contact me!</p>
                            </div>
                        </div>
                        <div className={styles.chart} style={{
                            background: "#0d0908c4",
                            left: `-100%`,
                            transform: `translate(${percentage * 172}%, -50%)`,

                        }}
                        >
                            <div className={styles.texts}>
                                <h2 className={styles.textTitle}>Skills</h2>
                                <div className={styles.skillsBox}>
                                    <span className={styles.skillCard}>
                                        <BiLogoJavascript className={styles.skillLogo} />
                                        <p className={styles.skillText} >JavaScript</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <BiLogoHtml5 className={styles.skillLogo} />
                                        <p className={styles.skillText} >HTML</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <BiLogoCss3 className={styles.skillLogo} />
                                        <p className={styles.skillText} >CSS</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <BiLogoReact className={styles.skillLogo} />
                                        <p className={styles.skillText} >React.js</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <BiLogoRedux className={styles.skillLogo} />
                                        <p className={styles.skillText} >Redux.js</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <BiLogoNodejs className={styles.skillLogo} />
                                        <p className={styles.skillText} >Node.js</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <TbSql className={styles.skillLogo} />
                                        <p className={styles.skillText} >SQL</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <BiLogoMongodb className={styles.skillLogo} />
                                        <p className={styles.skillText} >MongoDB</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <BiLogoFigma className={styles.skillLogo} />
                                        <p className={styles.skillText} >Figma</p>
                                    </span>
                                    <span className={styles.skillCard}>
                                        <BiGitBranch className={styles.skillLogo} />
                                        <p className={styles.skillText} >Git</p>
                                    </span>
                                </div>
                                <div className={styles.certificatesBox}>
                                    <h2 className={styles.textTitle}>Certificates</h2>
                                    <div className={styles.certificados}>
                                        <a href="" target='_blank' className={styles.certificado} >
                                            certificado1
                                        </a>
                                        <a href="" target='_blank' className={styles.certificado} >
                                            certificado2
                                        </a>
                                        <a href="" target='_blank' className={styles.certificado} >
                                            certificado3
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )} >
            </Parallax>
        </div>
    )
}

export default About