import React from "react";
import Heading from "./Heading";
import TemplateBox from "./TemplateBox";


function Skills() {
    return (
        <div className="Skills">
            <div className="skillScroll" >
                <Heading h1="Skills" />
                <TemplateBox
                    h2="Full Stack Developer"
                    description={
                        "From frontend and UI/UX to backend and databases I can build a website from start to finish." +
                        " Proficient in HTML, CSS, and JavaScript." +
                        "\n\n" +
                        " Experience using ES5/ES6 and ReactJS, NodeJS and ExpressJS, MongoDB, and SQL." +
                        " "
                    }
                />
                <TemplateBox
                    h2="Automation"
                    description={
                        "Using python I can automate emails, websites (selenium), and do server health checks." +
                        "\n\n" +
                        "I have experience using Anisible and YAML for network automation and Microsoft Power Automate for automating everyday Microsoft Software."
                    }
                />
                <TemplateBox
                    h2="Robotics"
                    description={
                        "Using python I implemented code for a robotic arm to be controlled by an xbox controller. " +
                        "I can use Assembly Language to create a robot that follows and solves a maze."
                    }
                />
            </div>
        </div>
    )
}

export default Skills;