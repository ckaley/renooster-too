// dependencies
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// utilities
import { splitArray } from '../utilities'

const Footer = ({ profile }) => {
    // // destructure profile
    const {
        fullName,
        headline,
        skills,
        github,
        linkedIn
    } = profile

    // // state hook variables
    const [skills2D, setSkills2D] = useState([[], []])

    // // split skills array into halves
    useEffect(() => skills && setSkills2D(splitArray(skills)), [skills])

    return (
        <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <span className="copyright">{`© Copyright ${new Date().getFullYear()}`}</span>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer