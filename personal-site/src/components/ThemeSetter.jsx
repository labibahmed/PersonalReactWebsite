import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const ThemeSetter = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div class="dropdown">
            <button class="dropbtn">Theme</button>
            <div class="dropdown-content">
                <button onClick={() => setTheme("Dark")}>Dark</button>
                <button onClick={() => setTheme("Light")}>Light</button>
            </div>
        </div>
    );
};

export default ThemeSetter;