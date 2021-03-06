import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import htmlImg from '../../images/stack/html5.svg'
import cssImg from '../../images/stack/css3.svg'
import javascriptImg from '../../images/stack/javascript.svg'

import '../css/internalTools.css'

const portfolio2017 = () => (
  <Layout>
    <SEO title='Portfolio 2017' />
    <section className='center-align intro'>
      <h3>High level overview of the Internal Tools Project</h3>
    </section>
    <div className='row'>
        <div className='col s12 l8 content-wrapper'>

            <h4>Website design</h4>
            <p>
                To create a simplistic portfolio from scratch using only HTML5, CSS3 and JavaScript.
            </p>
            <h4>Architecture design</h4>
            <p>
                Having minimal experience with just the fundamentals of front end development at the time, I decided to be as barebone with the project as I could. I decided to stick with the basics and learned the necessities when I wanted the DOM to change to my liking. This is so I could not use the magic of JavaScript and CSS frameworks or libraries. 
            </p>
            <Portfolio2017Image/>

        </div>
        <div className='col s12 l4 sidebar-wrapper'>
            <div className='col s12 content-wrapper center-align'>
                <h4 className='content-header'>
                    Portfolio 2017
                </h4>
                <p>
                First implementation of a barebone front end portfolio to showcase experience at the time.
                </p>
                <a href='https://github.com/bryanttran/bryanttran.github.io' target="_blank" rel="noopener noreferrer" >
                <button class="btn waves-effect waves-light" type="submit" name="action">View source code                </button>
                </a>
                
            </div>
            <div className='col s12 content-wrapper'>
                <h4 className='center-align content-header'>
                    Technology stack
                </h4>
                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={htmlImg} alt='HTML5' className='image-containter'/>
                    </div>
                        <div className="col s9 stack-description valign-wrapper">
                            <p>HTML5</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={cssImg} alt='CSS3' className='image-containter'/>
                    </div>
                        <div className="col s9 stack-description valign-wrapper">
                            <p>CSS3</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={javascriptImg} alt='Javascript' className='image-containter'/>
                    </div>
                        <div className="col s9 stack-description valign-wrapper">
                            <p>Javascript</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                </div>

            </div>
        </div>
    </div>
  </Layout>
)

export const Portfolio2017Image = () => {
    const query = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "projects/portfolio2017.png" }) {
          childImageSharp {
            fluid(maxWidth: 800 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img 
      fluid={query.placeholderImage.childImageSharp.fluid} 
    />
  }

export default portfolio2017
