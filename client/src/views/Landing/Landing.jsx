import React from 'react'
import styles from "./Landing.module.css"
import Hero from '../../components/Hero/Hero'
import Nav from '../../components/Nav/Nav'

const Landing = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />

    </div>




  )
}

export default Landing