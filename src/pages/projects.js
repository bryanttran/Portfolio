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
    <div className='row'>
      <Link to='/projects/internalTools/' class='col s12 m12'>
        <div className='card hoverable'>
          <div className='card-image'>
            <img src={internalTools} alt='internal-tools-image'/>
            <span className='card-title'>Card Title</span>
          </div>
          <div className='card-content'>
            <p>Internal tools for InfoIMAGE used to help alleviate basic Oracle SQL CRUD operations from technical departments.</p>
          </div>
        </div>
      </Link>
    </div>
  </Layout>
)

export default Projects
