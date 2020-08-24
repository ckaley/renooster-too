// dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

// data
// import projectsJSON from '../data/projects.json'

const Subscriptions = (props) => {
  const { profile } = props;
  // state hook variables
  const [projects, setProjects] = useState([]);

  // get projects after component mounts
  useEffect(() => {
    axios
      .get("/api/projects/")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
    // setProjects(projectsJSON)
  }, []);

  return (
    <>
      <Navbar profile={profile} />
      <div className="container" id="subscriptions">
        <div className="row">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
      <Footer profile={profile} />
    </>
  );
};

export default Subscriptions;
