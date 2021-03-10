import React from "react";
import Heading from "./Heading";
import NiceButton from '../NiceButton';
import TemplateBox from "./TemplateBox";
function Home() {
    return (
        <div className="home">
            <div className="skillScroll" >
                <Heading h1="Ashhab" />
                <TemplateBox
                    h2="Software Developer / Computer Engineer"
                    description={
                        "Ryerson Student working towards Bachelor of Engineering." +
                        " Passionate in diverse software categories and fields. " +
                        "\n \n" +
                        "Constantly learning and adapting to new technologies as time goes on. Located in the heart of Toronto I am constantly surrounded by" +
                        " hard working, passionated, and driven peers like myself."
                    }
                />
                <NiceButton type="link" name="Contact Me" width="160px" click={"/Contact"} />
            </div>
        </div>
    )
}

export default Home;