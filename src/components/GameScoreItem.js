import React from 'react';

/** Class representing single game score item displayed on the board
 * @extends React.Component
 * @memberOf components
 */
class GameScoreItem extends React.Component {
    /**
     * Function we can use to define the HTML code within the HTML element.
     * @param {object} value Object instance of Game object
     */
    render() {
        return (
            <li>{`${this.props.value.homeTeam} ${this.props.value.homeScore}  -  ${this.props.value.awayTeam} ${this.props.value.awayScore}`}</li>
        );
    }
}

export default GameScoreItem;