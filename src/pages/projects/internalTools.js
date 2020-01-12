import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import reactImg from '../../images/stack/React.svg'
import nodeImg from '../../images/stack/nodejs.svg'
import oracleImg from '../../images/stack/Oracle.svg'
import mongoImg from '../../images/stack/Mongodb.svg'

import '../css/internalTools.css'

const internalTools = () => (
  <Layout>
    <SEO title='Internal Tools' />
    <section className='center-align intro'>
      <h3>High level overview of the Internal Tools Project</h3>
    </section>
    <div className='row'>
        <div className='col s12 l8 content-wrapper'>

            <h4>Website design</h4>
            <p>
                Offset simple Oracle database CRUD operations such that non-technical departments can alter the database without giving them access and teaching them SQL.
            </p>
            <h4>Architecture design</h4>
            <p>
                There are two iterations of the Internal Tools Project. Both use the component front end framework, <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer" >ReactJS</a> but the back end specs changed due to which database was required during development. The first iteration used NodeJS's <a href='https://expressjs.com/' target="_blank" rel="noopener noreferrer">ExpressJS</a> to make API calls to the <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer" >MongoDB</a>. The second iteration used the open source <a href='https://github.com/oracle/node-oracledb' target="_blank" rel="noopener noreferrer">OracleDB</a>, maintained by Oracle, to connect and perform CRUD operations on InfoIMAGE's Oracle SQL database. 
            </p>
            <InternalToolsImage/>

        </div>
        <div className='col s12 l4 sidebar-wrapper'>
            <div className='col s12 content-wrapper center-align'>
                <h4 className='content-header'>
                    Internal tools
                </h4>
                <p>
                Internal tools for InfoIMAGE used to help alleviate basic Oracle SQL CRUD operations from technical departments.
                </p>
                <a href='https://github.com/bryanttran/internal_tools' target="_blank" rel="noopener noreferrer" >
                <button class="btn waves-effect waves-light" type="submit" name="action">View source code                </button>
                </a>
                
            </div>
            <div className='col s12 content-wrapper'>
                <h4 className='center-align content-header'>
                    Technology stack
                </h4>
                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={reactImg} alt='ReactJS' className='image-containter'/>
                    </div>
                    <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>ReactJS</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={nodeImg} alt='NodeJS' className='image-containter'/>
                    </div>
                    <a href='https://nodejs.org/en/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>NodeJS</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={mongoImg} alt='MongoDB' className='image-containter'/>
                    </div>
                    <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>MongoDB</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={oracleImg} alt='OracleDB' className='image-containter'/>
                    </div>
                    <a href='https://www.oracle.com/database/technologies/appdev/sql.html' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>OracleDB</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  </Layout>
)

export const InternalToolsImage = () => {
    const query = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "projects/internalTools.png" }) {
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

export default internalTools
