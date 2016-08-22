import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, hashHistory, IndexRoute } from "react-router";

import Page from "./Components/Page.js";

export default class Contact extends React.Component {
    render() {
        return (
            <p>toto</p>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ Page }>
            <IndexRoute component={ Page }/>
            <Route path="contact" component={ Contact } />
        </Route>
    </Router>
    ,document.getElementById("app"));