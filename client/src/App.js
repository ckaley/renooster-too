// dependencies
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import axios from 'axios'

// page components
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// data
// import profileJSON from './data/profile.json'

// styles
import './css/styles.css'

function App() {
    // state hook variables
    const [profile, setProfile] = useState({})

    // get profile after component mounts
    useEffect(() => {
        axios.get(`/api/profile/`)
            .then(res => setProfile(res.data))
            .catch(err => console.log(err))
        // setProfile(profileJSON)
    }, [])

    // set title when profile changes
    useEffect(() => {
        document.title = profile.fullName
    }, [profile])

    return (
        <Router>
            <div id="app-content">
                <Navbar profile={profile} />
                <div id="router-content">
                    <Switch>
                        <Route exact path="/" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/projects/:slug" component={Project} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
                <Footer profile={profile} />
            </div>
        </Router>
    )
}

export default App
