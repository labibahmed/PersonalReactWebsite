import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function Page() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Skills" exact component={Skills} />
            <Route path="/Experience" exact component={Experience} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Projects" exact component={Projects} />
        </Switch>
    )
}

export default Page;

