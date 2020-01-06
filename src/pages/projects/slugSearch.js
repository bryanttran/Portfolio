import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
 
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import ionicImg from '../../images/stack/ionic.svg'
import angularImg from '../../images/stack/angular.svg'
import javascriptImg from '../../images/stack/javascript.svg'

import '../css/internalTools.css'

const slugSearch = () => (
  <Layout>
    <SEO title='Slug Search' />
    <section className='center-align intro'>
      <h3>High level overview of the SlugSearch project</h3>
    </section>
    <div className='row'>
        <div className='col s12 l8 content-wrapper'>

            <h4>Website design</h4>
            <p>
                Used to create a hybrid web application which scrapes the UC Santa Cruz class website to solve the issue of UI/UX compatibility on mobile devices. 
            </p>
            <h4>Architecture design</h4>
            <p>
                The team members and I had decided to use the Ionic framework which utilized Angular 1 as the front end framework at the time. There was no fancy framework doing all the magic, just simple JavaScript GET requests and the team manually parsed the data received. We tried to keep the hybrid web application as robust as we could in both our front and back end. 
            </p>
            <SlugSearchImage/>

        </div>
        <div className='col s12 l4 sidebar-wrapper'>
            <div className='col s12 content-wrapper center-align'>
                <h4 className='content-header'>
                    SlugSearch
                </h4>
                <p>
                A hybrid web application developed for students at UCSC to search for classes in a more efficient manner.
                </p>
                <a href='https://github.com/AndrewLien/TeamHipster_IonicSC' target="_blank" rel="noopener noreferrer" >
                <button class="btn waves-effect waves-light" type="submit" name="action">View source code                </button>
                </a>
                
            </div>
            <div className='col s12 content-wrapper'>
                <h4 className='center-align content-header'>
                    Technology stack
                </h4>
                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={ionicImg} alt='react-image' className='image-containter'/>
                    </div>
                    <a href='https://ionicframework.com/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>Ionic</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={angularImg} alt='react-image' className='image-containter'/>
                    </div>
                    <a href='https://angular.io/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>Angular 1</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={javascriptImg} alt='react-image' className='image-containter'/>
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

export const SlugSearchImage = () => {
    const query = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "projects/slugSearch.png" }) {
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

export default slugSearch
