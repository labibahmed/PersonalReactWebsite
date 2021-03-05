import React from "react";
import Template from "./Template";
import NiceButton from '../NiceButton';
function Home() {
    return (
        <div className="home">
            <Template
                h1="Ashhab"
                h2="Software Developer / Computer Engineer"
                description={
                    "Ryerson Graduate with a Bachelor of Engineering " +
                    "well diversed in engineering, development, automation and more. " +
                    "\n \n" +
                    "Constantly learning and adapting to new technologies as time goes on"
                }
            />
            <NiceButton type="link" name="Contact Me" width="160px" click={"/Contact"} />

        </div>
    )
}

export default Home;