import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './css/projects.css'


import internalToolsCover from '../images/projects/internalToolsCover.png'
import portfolioCover from '../images/projects/portfolioCover.png'
import stockJournalCover from '../images/projects/stockJournalCover.png'
import slugSearchCover from '../images/projects/logo.png'

const Projects = () => (
  <Layout>
    <SEO title='Projects' />
    <section className='center-align intro'>
      <h3>Lets check out my recent personal projects that I have been working on.</h3>
    </section>
    <div className='container'>
      <div className='row '>
      <Link to='/projects/stockJournal/' class='col s12'>
          <div className='card hoverable'>
            <div className='card-image'>
              <img src={stockJournalCover} alt='stockJounal'/>
            </div>
            <div className='card-content'>
              <h5 className='project-title'>Stock Journal</h5>
              <h6>FRONT END DEVELOPMENT</h6>
              <p className='project-description'>Created a stock journal to record the reason I went into certain stock plays.</p>
            </div>
          </div>
        </Link>
        <Link to='/projects/portfolio2020/' class='col s12'>
          <div className='card hoverable'>
            <div className='card-image'>
              <img src={portfolioCover} alt='portfolio2020'/>
            </div>
            <div className='card-content'>
              <h5 className='project-title'>Portfolio 2020</h5>
              <h6>FRONT END DEVELOPMENT</h6>
              <p className='project-description'>Enhanced and updated previous portfolio to present my current skill set and projects.</p>
            </div>
          </div>
        </Link>
        <Link to='/projects/internalTools/' class='col s12'>
          <div className='card hoverable'>
            <div className='card-image'>
              <img src={internalToolsCover} alt='internal-tools'/>
            </div>
            <div className='card-content'>
              <h5 className='project-title'>InfoIMAGE Internal Tools </h5>
              <h6>FULL STACK DEVELOPMENT</h6>
              <p className='project-description'>Internal tools for InfoIMAGE used to help alleviate simple Oracle SQL CRUD operations from technical departments.</p>
            </div>
          </div>
        </Link>
        <Link to='/projects/portfolio2017/' class='col s12'>
          <div className='card hoverable'>
            <div className='card-image'>
              <img src={portfolioCover} alt='internal-tools'/>
            </div>
            <div className='card-content'>
              <h5 className='project-title'>Portfolio 2017 </h5>
              <h6>FRONT END DEVELOPMENT</h6>
              <p className='project-description'>First implementation of a barebone front end portfolio to showcase experience at the time.</p>
            </div>
          </div>
        </Link>
        <Link to='/projects/slugSearch/' class='col s12'>
          <div className='card hoverable'>
            <div className='card-image'>
              <img src={slugSearchCover} alt='internal-tools' className='slugSearch-img'/>
            </div>
            <div className='card-content'>
              <h5 className='project-title'>SlugSearch</h5>
              <h6>FULL STACK DEVELOPMENT</h6>
              <p className='project-description'>A hybrid web application developed for students at UCSC to search for classes in a more efficient manner.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    
  </Layout>
)

export default Projects
