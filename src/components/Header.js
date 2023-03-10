import React from 'react';
import './Header.css';
import logo from '../images/uefa2.png';

/** Class representing top title bar on football games dashboard page
 * @extends React.Component
 * @memberOf components
 */
class Header extends React.Component {
    /**
     * Function we can use to define the HTML code within the HTML element.
     * @param {string} props.name The board name
     */
    render() {
        return (
            <div className="app-title">
                <p><img src={logo} alt="logo" className="app-logo" />
                Live {this.props.name} Scoreboard</p>
                
            </div>
        );
    }
}

export default Header;