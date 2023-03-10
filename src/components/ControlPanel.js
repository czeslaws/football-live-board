import React from 'react';
import './ControlPanel.css';

/** Class representing top title bar on football games dashboard page
 * @extends React.Component
 * @memberOf components
 */
class ControlPanel extends React.Component {
    /**
     * Function we can use to define the HTML code within the HTML element.
     * @param {function} props.onClickSummary
     * @param {function} props.onClickAddGame
     * @param {function} props.onClickUpdateGame
     * @param {function} props.onClickEndGame
     */
    render() {
        return (
            <div className="board">
                <h2>Control panel</h2>
                <button onClick={() => this.props.onClickAddGame()}>
                    Add Game
                </button>
                <button onClick={() => this.props.onClickUpdateGame()}>
                    Update Game
                </button>
                <button onClick={() => this.props.onClickEndGame()}>
                    Finish Game
                </button>
                <button onClick={() => this.props.onClickSummary()}>
                    Generate Summary
                </button>
            </div>
        );
    }
}

export default ControlPanel;
