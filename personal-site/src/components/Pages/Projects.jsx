import React from "react";
import Heading from "./Heading";
import TemplateBox from "./TemplateBox";


function Projects() {
    return (
        <div className="Projects">
            <Heading h1="Projects" />
            <TemplateBox
                h2="Please Leave your information here and I will get back to you!"
                description={
                    "Blanks"
                }
            />
        </div>
    )
}

export default Projects;