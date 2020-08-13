import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

const projectData = require('../../data/project-data.json')

const Project = (props) => (
    <li><h3>{props.name}</h3>
        <div className={styles.projectImage}>
            <a href={props.gitHubLink}><Img fluid={props.image.childImageSharp.fluid} alt={props.name} fadeIn={false} /></a>
        </div>
        <div className={styles.projectInfo}>
            <p>{props.description}</p>
            <div className={styles.links}>
                <a href={props.gitHubLink}>GitHub</a>
                <a href={props.demoLink}>Demo</a>
            </div>
        </div>
    </li>
  )

const ProjectList = (props) => (
    <div className={styles.projectList} id="projects">
        <h2>Projects</h2>
        <ul>
            {projectData.map((project) =>
                <Project 
                    key={project.name}
                    name={project.name}
                    image={props.data[project.image]}
                    description={project.description}
                    gitHubLink={project.gitHubLink}
                    demoLink={project.demoLink}
                />
            )}
        </ul>
        <h2> <a id = "github" href="https://github.com/kennyklee123">More Projects Here On My Github</a></h2>     
    </div>
  )

export default ProjectList
  