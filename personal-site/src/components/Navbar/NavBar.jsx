import React from "react";
import SideIcons from "./SideIcons";
import ThemeContext from '../ThemeContext';


function NavBar(props) {
    return <ThemeContext.Consumer>
        {(value) =>
            <div className={"navbar " + value.theme}>
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
    </ThemeContext.Consumer>
}

export default NavBar;