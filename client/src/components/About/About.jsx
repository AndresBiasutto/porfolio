import React from 'react'
import styles from "./About.module.css"
import { Parallax } from "react-parallax"
import { TbBrandReact, TbBrandRedux, TbBrandGit, TbBrandMongodb, TbSql, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandLinkedin, TbMailAi } from "react-icons/tb";
import { BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoGit, BiLogoPostgresql, BiLogoMongodb, BiLogoFigma, BiLogoGithub, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiGitBranch } from "react-icons/bi"
import paisajeMarte from "../../assets/img/paisajeMarte.png"

const About = () => {
    return (
        <div id='about' className={styles.container}>

            <Parallax
                className={styles.neonWall}
                bgImage={paisajeMarte}
                strength={-500}
                renderLayer={(percentage) => (
                    <div className={styles.charts}>
                        <div className={styles.chart2} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            overflow: "hidden",
                            maxWidth: "1200px",
                            position: "absolute",
                            background: "var(--brown)",
                            borderRadius: "10px",
                            right: `-100%`,
                            top: "53%",
                            transform: `translate(-${percentage * 340}%, -50%)`,
                            width: "45%",
                            height: "90%"
                        }}>
                            <div className={styles.texts}>
                                <h2 className={styles.textTitle}>About me</h2>
                                <p className={styles.textText}>Hello! I'm Andrés Biasutto, a Full Stack developer. My focus is on JavaScript, Node.js, React.js, Redux.js, Express.js, HTML, CSS, and SQL. I also have experience with Angular, PostgreSQL, MongoDB, Mongoose, and Tailwind.
                                    I worked at Social Media Lab, a startup, where I participated in frontend and backend development. I gained valuable experience and understood the importance of teamwork in dynamic environments. In addition to my technical skills, I possess soft skills such as empathy, creativity, constant learning, and adaptability.
                                    I also have knowledge in UX/UI design and previous experience as a web designer in WordPress.
                                    I'm looking for exciting opportunities to apply my knowledge and experience in development and design. If you're interested in working together or want to learn more, feel free to contact me!</p>
                            </div>
                        </div>
                        <div className={styles.chart1} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            overflow: "hidden",
                            maxWidth: "1200px",
                            position: "absolute",
                            background: "#0d0908c4",
                            borderRadius: "10px",
                            left: `-100%`,
                            top: "53.5%",
                            transform: `translate(${percentage * 340}%, -50%)`,
                            width: "45%",
                            height: "90%"
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
                                    <a href="" target='_blank'>
                                        <div>
                                            <button>certificado</button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.chart1} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            overflow: "hidden",
                            maxWidth: "1200px",
                            position: "absolute",
                            background: "var(--black)",
                            borderRadius: "10px",
                            left: `-100%`,
                            top: "78.1%",
                            transform: `translate(${percentage * 340}%, -50%)`,
                            width: "45%",
                            height: "40%"
                        }}></div> */}


                    </div>
                )} >

                <div className={styles.insideContainer}>

                </div>

                {/* <h3>
                    <TbBrandReact />
                    <BiLogoReact />
                    <TbBrandRedux />
                    <BiLogoRedux />
                    <TbBrandGit />
                    <BiLogoGit />
                    <BiLogoGithub />
                    <TbSql />
                    <BiLogoPostgresql />
                    <TbBrandMongodb />
                    <BiLogoMongodb />
                    <TbBrandCss3 />
                    <TbBrandHtml5 />
                    <TbBrandJavascript />
                    <TbBrandLinkedin />
                    <TbMailAi />
                    <BiLogoNodejs />
                    <BiLogoFigma />

                </h3> */}
            </Parallax>

        </div>
    )
}

export default About