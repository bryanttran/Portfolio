import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import '../css/internalTools.css'

const internalTools = () => (
  <Layout>
    <SEO title='Page two' />
    <section className='center-align intro'>
      <h3>High level overview of the Internal Tools project</h3>
    </section>
    <div className='row'>
        <div className='col s8 content-wrapper'>
            <h4>
                As a user I want to...
            </h4>
            <p>
                Offset simple Oracle database CRUD operations such that non-technical departments can change the database without giving them access and teaching them SQL.
            </p>
            <h4>
                Website design
            </h4>
            <p>
                test
            </p>
            <h4>
                Caveats &amp; speedbumps
            </h4>
            <p>
                test
            </p>            
        </div>
        <div className='col s4 sidebar-wrapper'>
            <div className='col s12 content-wrapper center-align'>
                <h4>
                    Internal tools
                </h4>
                <p>
                Internal tools for InfoIMAGE used to help alleviate basic Oracle SQL CRUD operations from technical departments.
                </p>
            </div>
            <div className='col s12 content-wrapper center-align'>
                <h4>
                    Technology stack
                </h4>
                <p>
                Internal tools for InfoIMAGE used to help alleviate basic Oracle SQL CRUD operations from technical departments.
                </p>
            </div>
        </div>
    </div>
  </Layout>
)

export default internalTools
