import React, { Component } from 'react'

import Github from '../images/Github.svg'
import LinkedIn from '../images/LinkedIn.svg'
import Resume from '../images/Resume.svg'
import './css/footer.css'
import ReactTooltip from 'react-tooltip'

export class footer extends Component {
    
    render() {
        return (
            <div className='center-align valign-wrapper'>
                <div className='center-align footer-container'>
                  <h3>Lets get in touch!</h3>
                  <ReactTooltip place="bottom" type="dark" effect="solid"/>

                    <a href='https://www.linkedin.com/in/bryanttran1/' target="_blank" rel="noopener noreferrer"  data-tip="LinkedIn">
                        <img className='footer-image' src={LinkedIn} />
                    </a>

                    <a href='https://github.com/bryanttran' target="_blank" rel="noopener noreferrer" data-tip="Github">
                        <img className='tooltipped footer-image' src={Github} />
                    </a>

                    <a href='' target="_blank" rel="noopener noreferrer" data-tip="Resume"> 
                        <img className='footer-image' src={Resume} /> <br />
                    </a>
                    <br />

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
