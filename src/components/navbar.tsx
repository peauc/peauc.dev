import * as React from 'react';

import './navbar.scss';

interface INavbarProps {
    links: string[]
    logo: string
}

class Navbar extends React.Component <INavbarProps> {
    public render() {
        
        return (
            <div id='navbar'>
                <div id='navbar-items'>
                    <div id='logo'>
                        <img src={ this.props.logo }/>
                    </div>
                    <div id='navbar-links-container'>
                        <ul id='navbar-links'>
                            { this.props.links.map((item, key) => 
                                <li key={key}>
                                    <a href={item} >{item}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>        
            </div>
        )
    }
}

export default Navbar;