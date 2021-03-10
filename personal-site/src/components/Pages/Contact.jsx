import React from "react";
import Heading from "./Heading";
import TemplateBox from "./TemplateBox";

function Contact() {
    return (
        <div className="Contact">
            <Heading h1="Contact" />
            <TemplateBox
                h2="Please Leave your information here and I will get back to you!"
                description={
                    "Blanks"
                }
            />
        </div>
    )
}

export default Contact;