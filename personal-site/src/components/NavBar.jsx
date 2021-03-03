import React from "react";
import SideIcons from "./SideIcons";

function NavBar() {
    return <div className="navbar">

        <SideIcons type="head" name="Home" />
        <div className="navbar-icons">
            <ul className="navbar-list">
                <SideIcons type="text" name="About" />
                <SideIcons type="text" name="Skills" />
                <SideIcons type="text" name="Experience" />
                <SideIcons type="text" name="Projects" />
                <SideIcons type="text" name="Contact" />
            </ul>
        </div>
    </div>
}

export default NavBar;