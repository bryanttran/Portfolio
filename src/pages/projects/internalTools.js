import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import '../css/internalTools.css'

const internalTools = () => (
  <Layout>
    <SEO title='Page two' />
    <section className='center-align intro'>
      <h3>Internal tools project specs</h3>
    </section>
    <div className='row'>
        <div className='col s7 content-wrapper'>
            <h5>
                Project overview
            </h5>
            <p>
                test
            </p>
            <h5>
                Website design
            </h5>
            <p>
                test
            </p>
            <h5>
                Caveats & speedbumps
            </h5>
            <p>
                test
            </p>            
        </div>
        <div className='col push-s1 s4'>
        <div className='col s12 content-wrapper center-align'>
            <h5>
                Internal tools
            </h5>
            <p>
            Internal tools for InfoIMAGE used to help alleviate basic Oracle SQL CRUD operations from technical departments.
            </p>
        </div>
        <div className='col s12 content-wrapper center-align'>
            <h5>
                Internal tools
            </h5>
            <p>
            Internal tools for InfoIMAGE used to help alleviate basic Oracle SQL CRUD operations from technical departments.
            </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default internalTools
