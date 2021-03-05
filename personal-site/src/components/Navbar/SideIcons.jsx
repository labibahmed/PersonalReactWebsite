import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgA } from './Asysmbol.svg';

function SideIcons(props) {
    if (props.type === "text") {
        return (
            <li className="navbar-item" >
                <Link to={"/" + props.name}>

                    <a className="side-icons-text" href="#" name={props.name} >
                        {props.name}
                    </a>
                </Link>
            </li >
        );
    }
    else if (props.type === "head") {
        return (
            <Link to={"/"}>
                <SvgA className="navLogo" name="head" />
            </Link>

        );
    }
}

export default SideIcons;