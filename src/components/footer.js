import React, { Component } from 'react'

import Github from '../images/Github.svg'
import LinkedIn from '../images/LinkedIn.svg'
import Resume from '../images/Resume.svg'
import './css/footer.css'

export class footer extends Component {
    
    render() {
        return (
            <div className='center-align valign-wrapper'>
            
                <div className='center-align footer-container'>
                    <img className='tooltipped footer-image' data-position="bottom" data-tooltip="LinkedIn" src={Github} />
                    <img className='footer-image' src={LinkedIn} />
                    <img className='footer-image' src={Resume} /> <br />
                    <p className=' center-block '>
                        Copyright Bryant Tran {new Date().getFullYear()} <br />
                        Website built using GatsbyJS and Materialize CSS.
                    </p>
                </div>
                
            </div>
            
        )
    }
}

export default footer
