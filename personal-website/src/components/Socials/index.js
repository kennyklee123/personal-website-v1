import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'
import { IconContext } from "react-icons";
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'
import { FaFilePdf} from 'react-icons/fa'


const Socials = ( {linkedIn, github, twitter, devTo} ) => (
  <div className={styles.socialIcons}>
  <ul>
    <li><a href="https://www.linkedin.com/in/kennykailee/" aria-label="LinkedIn Profile"><FaLinkedinIn /></a></li>
    <li><a href="https://github.com/kennyklee123" aria-label="GitHub Profile"><FaGithubAlt /></a></li>
    <li><a href="https://dev.to/kennyklee123" aria-label="Dev.to Profile"><FaDev /></a></li>
    <li><a href="https://drive.google.com/file/d/10paqgQH2PL3c-wmCIYWugSm0a_m5PMK9/view?usp=sharing" aria-label="Dev.to Profile"><FaFilePdf /></a></li>
  </ul>

  </div>
 )

export default Socials
