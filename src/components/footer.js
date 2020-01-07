import React, { Component } from 'react'

import Github from '../images/Github.svg'
import LinkedIn from '../images/LinkedIn.svg'
import Resume from '../images/Resume.svg'
import Email from '../images/Email.svg'
import './css/footer.css'
import ReactTooltip from 'react-tooltip'

export class footer extends Component {
    render() {
        return (
            <div className='center-align valign-wrapper'>
                <div className='center-align footer-container'>
                  <h3 className='footer-title'>Lets get in touch!</h3>
                        <div className='contact-container'>
                            <a href='https://www.linkedin.com/in/bryanttran1/' target="_blank" rel="noopener noreferrer"  >
                            <ReactTooltip className='footer-tooltip' place="top" type="dark" effect="solid"/>
                                <img className='footer-image' src={LinkedIn} data-tip="LinkedIn" alt='LinkedIn'/>
                            </a>

                            <a href='https://github.com/bryanttran' target="_blank" rel="noopener noreferrer" >
                                <ReactTooltip className='footer-tooltip' place="top" type="dark" effect="solid"/>
                                <img className='tooltipped footer-image' src={Github} data-tip="Github" alt='Github'/>
                            </a>

                            <a href='mailto:bryant.t.tran1@gmail.com' >
                                <ReactTooltip className='footer-tooltip' place="top" type="dark" effect="solid"/>
                                <img className='tooltipped footer-image' src={Email} data-tip="Email" alt='Email'/>
                            </a>

                            <a href='https://github.com/bryanttran' target="_blank" rel="noopener noreferrer" > 
                                <ReactTooltip className='footer-tooltip' place="top" type="dark" effect="solid"/>
                                <img className='footer-image' src={Resume} data-tip="Resume" alt='Resume'/> 
                            </a>
                        </div>
                    <br />
                    <p className='center-block footer-text'>
                        Copyright Bryant Tran {new Date().getFullYear()} <br />
                        Website built using GatsbyJS and Materialize CSS.
                    </p>
                </div>
            </div>
        )
    }
}



export default footer
