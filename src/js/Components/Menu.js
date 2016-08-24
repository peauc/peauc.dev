import React from "react";
import { Link } from "react-router"

export default class Menu extends React.Component {
    render () {
        return (
            <div id="Menu">
                <Link to="contact"><button class="btn btn-success">Button 01</button></Link>
                <Link to="contact"><button class="btn btn-success">Button 02</button></Link>
            </div>
        )
    }
    }