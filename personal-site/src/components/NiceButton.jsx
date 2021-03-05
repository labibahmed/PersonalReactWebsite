import React from 'react'
import { Link } from "react-router-dom";

function NiceButton(props) {
    if (props.type === "link") {
        return <Link to={props.click} >
            <button className="niceBtn" type="button" onClick={props.click} style={{ width: props.width }} >

                {props.name}

            </ button>
        </Link>
    }
    else if (props.type === "href") {
        return
        <button className="niceBtn" type="button" onClick={props.click} style={{ width: props.width }} >

            {props.name}

        </ button>

    }
}

export default NiceButton;