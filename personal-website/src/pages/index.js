import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/Main'
import About from '../components/About'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'
import { checkPropTypes } from 'prop-types';


const IndexPage = (props) => (
  <Layout>
    <SEO title="Kenny Kai Lee" keywords={[`los angeles software engineer`, `los angeles web developer`, `software engineer` , `backend engineer`, `kenny kai lee portfolio`, `frontend engineer`]} />
    <div>
      <Main />
      <About data={props.data} />
      <ProjectList data={props.data}/>
      <Contact />
    </div>
  </Layout>
)

export default IndexPage

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid(maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    headshotImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    project1: file(relativePath: { eq: "project1.png" }) {
      ...projectImage
    }
    project2: file(relativePath: { eq: "project2.png" }) {
      ...projectImage
    }
    project3: file(relativePath: { eq: "project3.png" }) {
      ...projectImage
    }
    project4: file(relativePath: { eq: "project4.png" }) {
      ...projectImage
    },
  }
  `