import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import './css/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="center-align intro">
      <h3>Hey There! I am Bryant, a software engineer based in San Jose, CA. Let's get to know each other.</h3>
    </section>
    
    <div className='row'>
      <div className='col s12 m6 l5 offset-m3'>
       <Image className='headshotImage' alt='head-shot-image' />
      </div>
      <section className='col s12 m12 l7 pitch'>
        <h4 className='bold'>My Elevator pitch:</h4>
        <p className='pitch-desc'>I am currently a full stack engineer at InfoImage, in which I grew my strengths and enjoyment in full-stack development. The use of new and modern technologies excite me, such as <strong>React</strong> and <strong>NodeJS</strong>. One of the side projects which helped grow my modern skillset was my <Link to="/projects/">Internal Tools.</Link> I also have a solid amount of experience in other places such as <strong>Java, Oracle SQL, and MongoDB</strong>. Outside of development, I enjoy learning about music theory. I am currently open to new opportunities so feel free to <a href="mailto:bryant.t.tran1@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/bryanttran1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
    </div>

    <div className='center-align'>
      <Link className="waves-effect waves-light btn" to="/projects/">Check out my work and experience!</Link>
    </div>
  </Layout>
)

export const Image = () => {
  const query = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "BryantTran1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img 
    className='headshotImage'
    fluid={query.placeholderImage.childImageSharp.fluid} 
  />
}

export default IndexPage
