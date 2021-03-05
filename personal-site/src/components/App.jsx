import React, { useState } from 'react';
import Navbar from './Navbar/NavBar';
import Page from './Page';
import ThemeContext from './ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    const [theme, setTheme] = useState('Dark')
    const value = { theme, setTheme }
    return (
        <Router>
            <ThemeContext.Provider value={value}>
                <Navbar />
                <Page />
            </ThemeContext.Provider>
        </Router>
    );
}


export default App;