import React from "react";
import SideIcons from "./SideIcons";


function NavBar() {
    return <div className="navbar">

        <h1 className="navbar-header">Ashhab</h1>

        <ul className="navbar-icons">
            <SideIcons type="text" href="" name="About" />
            <SideIcons type="text" href="" name="Skills" />
            <SideIcons type="text" href="" name="Experience" />
            <SideIcons type="text" href="" name="Projects" />
            <SideIcons type="text" href="" name="Contact" />
        </ul>
    </div>
}

export default NavBar;