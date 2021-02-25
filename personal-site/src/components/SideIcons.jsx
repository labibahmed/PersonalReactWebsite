import React from "react";

function SideIcons(props) {
    if (props.type == "text") {
        return (
            <li className="nav">
                <a href={props.href} className="side-icons-text">
                    {props.name}
                </a>

            </li>
        );
    }
    else if (props.type = "img") {
        return (
            <li className="nav">
                <img href={props.href} className="side-icons-img">
                    {props.src}
                </img>

            </li>
        );
    }
}

export default SideIcons;