import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <section className='center-align intro'>
      <h3>Lets check out my recent personal projects that I have been working on.</h3>
    </section>
    <div class='row'>
      <Link to='/projects/internalTools/' class='col s12 m12'>
        <div class='card hoverable'>
          <div class='card-image'>
            <img src='images/sample-1.jpg' alt='internal-tools-image'/>
            <span class='card-title'>Card Title</span>
          </div>
          <div class='card-content'>
            <p>Internal tools for InfoIMAGE used to help alleviate basic Oracle SQL CRUD operations from technical departments.</p>
          </div>
        </div>
      </Link>
    </div>
  </Layout>
)

export default SecondPage
