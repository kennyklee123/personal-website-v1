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
                expected graduation date of Spring Semester 2021. My primary work has been in backend and web development with languages like
                Java, Javascript, SQL, and Python.I also use frameworks and technologies like React, Node.js, Express.js,and Git. 
                In my free time I enjoy building out side-projects, gaming, and enjoying the outdoors!
                <br></br>
                Click on the PDF icon above to view my resume!
           </p>
        </div>
    </div>
 )

export default About