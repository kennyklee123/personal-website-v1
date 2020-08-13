import React from 'react'
import Socials from '../Socials'
import styles from './index.module.scss'

const Footer = (props) => (
    <footer className={styles.footer}>
        <div className={styles.links}>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#projects-section">Projects</a></li>
        </ul>          

        </div>
        <p>This site is created by Kenny Kai Lee using Gatsby!</p>
        <p>Check out <a href="https://github.com/kennyklee123/kenny-k-lee-website">the code for this site</a>.</p>
        <Socials />
    </footer>
 )

export default Footer