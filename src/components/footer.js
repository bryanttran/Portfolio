import React, { Component } from 'react'

import Github from '../images/Github.svg'
import LinkedIn from '../images/LinkedIn.svg'
import Resume from '../images/Resume.jpg'
import './css/footer.css'

export class footer extends Component {
    render() {
        return (
            <div className='row footer-container valign-wrapper'>
                <img src={Github} />
                <img src={LinkedIn} />
                <img src={Resume} />
                <p className='center-align center-block'>
                    Copyright Bryant Tran {new Date().getFullYear()} <br />
                    Website built using GatsbyJS and Materialize CSS.
                </p>
            </div>
        )
    }
}

export default footer
