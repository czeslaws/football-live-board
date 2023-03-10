import React from 'react';
import GameScoreItem from './GameScoreItem';
import './Board.css';


/** Class representing panel containing game results on football games dashboard page
 * @extends React.Component
 * @memberOf components
 */
class Board extends React.Component {

    /**
     * Function we can use to define the HTML code within the HTML element.
     * @param {object} props.data Array of game objects which are currently active
     * @param {string} props.title Borad title
     */
    render() {
        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <ul>
                { this.props.data.map(game => (
                    <GameScoreItem key={game.id} value={game} />
                ))}
                </ul>
            </div>
        );
    }
}

export default Board;