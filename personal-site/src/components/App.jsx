import React from 'react';
import Navbar from './NavBar';
import Page from './Page';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Page />
            </div>
        </Router>
    );
}


export default App;