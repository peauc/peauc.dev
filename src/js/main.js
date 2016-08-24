import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, hashHistory, IndexRoute } from "react-router";

import DefaultPage from "./Components/DefaultPage.js";
import Page from "./Components/Page.js";
import Contact from "./Components/Contact.js";


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ Page }>
            <IndexRoute component={ DefaultPage}/>
            <Route path="contact" component={ Contact } />
        </Route>
    </Router>
    ,document.getElementById("app"));