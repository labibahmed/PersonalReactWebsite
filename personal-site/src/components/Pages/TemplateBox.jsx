import React from "react";

function TemplateBox(props) {
    return (
        <div className="description templateBox">
            <p className="h2">
                {props.h2.split("\n").map((i, key) => {
                    return <div key={key}>{i}</div>;
                })}</p>
            <p className="details">{props.description}</p>
        </div>
    )
}

export default TemplateBox;