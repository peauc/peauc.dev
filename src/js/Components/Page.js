import React from "react";

import Menu from "./Menu.js";
import Header from "./Header.js";

export default class Page extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Menu />
                {this.props.children}
            </div>
        );
    }
}
