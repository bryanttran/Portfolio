import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import gatsbyImg from '../../images/stack/Gatsby.svg'
import nodeImg from '../../images/stack/nodejs.svg'
import graphQLImg from '../../images/stack/graphQL.svg'
import materializeImg from '../../images/stack/materializecss.svg'

import '../css/internalTools.css'

const portfolio2020 = () => (
  <Layout>
    <SEO title='Portfolio 2020' />
    <section className='center-align intro'>
      <h3>High level overview of the Portfolio 2020 Project</h3>
    </section>
    <div className='row'>
        <div className='col s12 l8 content-wrapper'>

            <h4>Website design</h4>
            <p>
                Create a simplistic yet strong portfolio to showcase my most recent projects.
            </p>
            <h4>Architecture design</h4>
            <p>
                Since this would only be a Front End Web application, I wanted to use a fast and simplistic framework. Having my most recent project be based on <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer" >ReactJS</a>, what better way than to use a Progressive Web App generator which uses ReactJS, <a href='https://www.gatsbyjs.org/' target="_blank" rel="noopener noreferrer" >GatsbyJS</a>. Needing a CSS framework to help alleviate simple CSS jobs, I decided to use <a href='https://materializecss.com/' target="_blank" rel="noopener noreferrer" >MaterializeCSS</a>. 
            </p>
            <Portfolio2020Image/>

        </div>
        <div className='col s12 l4 sidebar-wrapper'>
            <div className='col s12 content-wrapper center-align'>
                <h4 className='content-header'>
                    Portfolio 2020
                </h4>
                <p>
                    Enhanced and updated previous portfolio to present my current skillset and projects.
                </p>
                <a href='https://github.com/bryanttran/Portfolio' target="_blank" rel="noopener noreferrer" >
                <button class="btn waves-effect waves-light" type="submit" name="action">View source code                </button>
                </a>
                
            </div>
            <div className='col s12 content-wrapper'>
                <h4 className='center-align content-header'>
                    Technology stack
                </h4>
                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={gatsbyImg} alt='GatsbyJS' className='image-containter'/>
                    </div>
                    <a href='https://www.gatsbyjs.org/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>GatsbyJS</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={graphQLImg} alt='GraphQL' className='image-containter'/>
                    </div>
                    <a href='https://graphql.org/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>GraphQL</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={nodeImg} alt='NodeJS' className='image-containter'/>
                    </div>
                    <a href='https://www.nodejs.org/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>NodeJS</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={materializeImg} alt='MaterializeCSS' className='image-containter'/>
                    </div>
                    <a href='https://materializecss.com/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>Materialize CSS</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
  </Layout>
)

export const Portfolio2020Image = () => {
    const query = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "projects/portfolio2020.png" }) {
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

export default portfolio2020
