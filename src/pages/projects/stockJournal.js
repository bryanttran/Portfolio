import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import reactImg from '../../images/stack/React.svg'
import awsImg from '../../images/stack/aws.png'
import reactBootstrapImg from '../../images/stack/reactBootstrap.png'
import nodeImg from '../../images/stack/nodejs.svg'
import serverlessImg from '../../images/stack/serverless.png'

import '../css/stockJournal.css'

const stockJournal = () => (
  <Layout>
    <SEO title='Stock Journal' />
    <section className='center-align intro'>
      <h3>High level overview of the Stock Journal Project</h3>
    </section>
    <div className='row'>
        <div className='col s12 l8 content-wrapper'>
            <h4>Website design</h4>
            <p>
                Create an application to record the reasoning behind buying and selling of stocks.
            </p>
            <h4>Architecture design</h4>
            <p>
                Requiring a database, I decided to integrate <a href='https://aws.amazon.com/' target="_blank" rel="noopener noreferrer" >AWS</a> and the <a href='https://serverless-stack.com/' target="_blank" rel="noopener noreferrer" >Serverless Framework</a> as my backend. Creating an application with AWS, I learned how powerful the web service is while being very affordable which allows users to have a centralized location for databases, API endpoints, user management, authentication, and file upload. I decided to keep <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer" >ReactJS</a> as the dedicated frontend framework. I utilized the most popular front-end framework, <a href='https://react-bootstrap.github.io/' target="_blank" rel="noopener noreferrer" >React Bootstrap</a> due to its accessibility and compatibility.
            </p>
            <div className='youtube-container'>
                <iframe className='youtube' src="https://www.youtube.com/embed/kLJSfrrca1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <StockJournalImage/>

        </div>
        <div className='col s12 l4 sidebar-wrapper'>
            <div className='col s12 content-wrapper center-align'>
                <h4 className='content-header'>
                    Stock Journal
                </h4>
                <p>
                    Enhanced and updated previous portfolio to present my current skillset and projects.
                </p>
                <a href='https://github.com/bryanttran/stock-journal-client' target="_blank" rel="noopener noreferrer" class="stock-btn">
                <button class="btn waves-effect waves-light" type="submit" name="action">View client code</button>
                </a>
                <a href='https://github.com/bryanttran/stock-journal-api' target="_blank" rel="noopener noreferrer" class="stock-btn">
                <button class="btn waves-effect waves-light" type="submit" name="action">View api code</button>
                </a>
                
            </div>
            <div className='col s12 content-wrapper'>
                <h4 className='center-align content-header'>
                    Technology stack
                </h4>
                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={awsImg} alt='AWS' className='image-containter'/>
                    </div>
                    <a href='https://aws.amazon.com/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>AWS</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

                <div className='row stack-row'>
                    <div className="col s2 center-align">
                        <img src={serverlessImg} alt='ServerlessStack' className='image-containter'/>
                    </div>
                    <a href='https://serverless-stack.com/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>Serverless</p>
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
                        <img src={reactBootstrapImg} alt='reactBootstrap' className='image-containter'/>
                    </div>
                    <a href='https://react-bootstrap.github.io/' target="_blank" rel="noopener noreferrer" >
                        <div className="col s9 stack-description valign-wrapper">
                            <p>React Bootstrap</p>
                            <i className="material-icons next-icon">navigate_next</i>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
  </Layout>
)

export const StockJournalImage = () => {
    const query = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "projects/stockJournal" } }) {
                edges {
                    node {
                    id
                        childImageSharp {
                            fluid{
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `)
    /*const query = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "projects/stockJournal.png" }) {
          childImageSharp {
            fluid(maxWidth: 800 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)*/
    return (
        <>
            {query.allFile.edges.map(({ node }) => (
                <Img 
                    fluid={node.childImageSharp.fluid} className="stockImg"
                />
            ))}
            
        </> 
    )

}
export default stockJournal
