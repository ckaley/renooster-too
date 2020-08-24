// dependencies
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// data
// import projectsJSON from '../data/projects.json'

const Project = () => {
    // get slug param
    const { slug } = useParams()

    // state hook variables
    const [project, setProject] = useState([])

    // destructure project
    const {
        name,
        description,
        screenshot,
        github,
        demo
    } = project

    // get project after component mounts
    useEffect(() => {
        axios.get(`/api/projects/${slug}`)
            .then(res => setProject(res.data))
            .catch(err => console.log(err))
        //setProject(projectsJSON[0])

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container" id="project">
            <div className="card-panel">
                <div className="row">
                    <div className="col s12 m6 l4">
                        <img alt={name} src={screenshot} />
                    </div>
                    <div className="col s12 m6 l8">
                        <h1>{name}</h1>
                        <p className="flow-text">{description}</p>
                        <ul>
                            {github ? <li><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></li> : null}
                            {demo ? <li><a href={demo} target="_blank" rel="noopener noreferrer">Demo</a></li> : null}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
