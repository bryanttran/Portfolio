import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './css/projects.css'

import internalTools from '../images/BryantTran.jpg'

const Projects = () => (
  <Layout>
    <SEO title='Projects' />
    <section className='center-align intro'>
      <h3>Lets check out my recent personal projects that I have been working on.</h3>
    </section>
    <div className='container'>
      <div className='row '>
        <Link to='/projects/internalTools/' class='col s12 m12'>
          <div className='card hoverable'>
            <div className='card-image'>
              <img src={internalTools} alt='internal-tools-image'/>
            </div>
            <div className='card-content'>
              <h5 className='project-title'>InfoIMAGE Internal Tools </h5>
              <h6>Full Stack development | Interactive design</h6>
              <p className='project-description'>Internal tools for InfoIMAGE used to help alleviate simple Oracle SQL CRUD operations from technical departments.</p>
            </div>
          </div>
        </Link>
      </div>


    </div>
    
  </Layout>
)

export default Projects
