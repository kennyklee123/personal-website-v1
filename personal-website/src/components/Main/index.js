import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'
import Socials from '../Socials'

const Main = (props) => (
  <div className={styles.main} id="home">
    <h1>Kelli Blalock</h1>
    <h2>Web Developer</h2>
    <Socials/>
  </div>
 )

export default Main