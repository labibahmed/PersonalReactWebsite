import React from "react";

function Template(props) {
    return (
        <div className="template">
            <h1>{props.h1}</h1>
            <div className="description">
                <p className="h2">{props.h2}</p>
                <p className="details">{props.description}</p>
            </div>
        </div>
    )
}

export default Template;