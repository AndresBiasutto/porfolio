import React from 'react'
import "./Navbar.css"
import { useState } from 'react';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
<>
<div className="navbar">
  <div className="nav_logo">logo</div>
  <div className={`nav_items ${isMenuOpen && "open"}`}>
      <a href="#">home</a>
      <a href="#">about</a>
      <a href="#">portfolio</a>
      <a href="#">contact</a>
    </div>
    <div className={`nav_toggle ${isMenuOpen && "open"}`} onClick={handleMenuToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
</div>
</>
      );
}

export default Nav

  
        // <div className={styles.navContainer}>
        //   <h1>logo</h1>
        //   <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        //     <a href="">Home</a>
        //     <a href="">About</a>
        //     <a href="">Portfolio</a>
        //     <a href="">Contact</a>
        //   </nav>
        //   <button className={styles.menuButton} onClick={handleMenuToggle}>
        //     <span className={styles.menuIcon}></span>
        //   </button>
        // </div>