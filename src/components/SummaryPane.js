import React from 'react';
import './SummaryPane.css';


/** Class representing panel containing game results summary on football games dashboard page
 * @extends React.Component
 * @memberOf components
 */
class SummaryPane extends React.Component {
    
    /**
     * @private
     */
    _genrateReport(){
        let text = '';
        this.props.data.forEach((game, index) => (
            text += ` ${index+1}. ${game.homeTeam} ${game.homeScore}  -  ${game.awayTeam} ${game.awayScore} \n`)
        );
        if (text){
            text += `\n\n    Summary generated on ${Date()}.`
        }
        return text;
    }
    
    /**
     * Function we can use to define the HTML code within the HTML element.
     * @param {object} props.data Array of game objects to be displayed
     * @param {string} props.title Borad title
     */
    render() {
        const text = this._genrateReport();
        return (
            <div className="summary-pane">
                <h2>{this.props.title}</h2>
                <pre>
                    {text}
                </pre>
            </div>
        );
    }
}

export default SummaryPane;