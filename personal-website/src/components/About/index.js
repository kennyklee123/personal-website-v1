import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

const About = (props) => (
    <div className={styles.about} id="about">
        <div className={styles.headshot}>
            <Img fluid={props.data.headshotImage.childImageSharp.fluid} alt="me" fadeIn={false} />
        </div>
        <div className={styles.myInfo}>
            <h2>About</h2>
            <p> Hi, I'm Kenny and I am a rising senior at Cal Poly Pomona majoring in Computer Science with an
                expected graduation date of May 2021. Unfortunately, my internship at BAE Systems was cancelled for 
                the summer of 2020.
            </p>
  
            <p>In my free time I enjoy building out side-projects, gaming, and enjoying the outdoors! </p>
               
        </div>
    </div>
 )

export default About