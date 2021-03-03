import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgA } from './Asysmbol.svg';
import { ReactComponent as SvgName } from './logo+name.svg';

function SideIcons(props) {
    if (props.type === "text") {
        return (
            <li className="navbar-item">
                <Link to={"/" + props.name}>
                    <a href={props.href} className="side-icons-text">
                        {props.name}
                    </a>
                </Link>

            </li>
        );
    }
    else if (props.type === "head") {
        return (
            <Link to={"/"}>
                <SvgA className="navLogo" />
            </Link>

        );
    }
}

export default SideIcons;