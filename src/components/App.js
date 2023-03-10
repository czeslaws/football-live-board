import React from 'react';
import Header from './Header';
import Board from './Board';
import ControlPanel from './ControlPanel';
import SummaryPane from './SummaryPane';
import FootballGames from '../data_model/FootballGames';

/**
 * @namespace components
 */


/** 
 * Class representing a football games dashboard application
 * @extends React.Component
 * @memberOf components
 */
class App extends React.Component {
    /**
     * @param {string} props.name The board name
     */
     constructor(props) {
        super(props);
        this.state = {
            liveScores: [],
            gamesSummary: [],
        }

        this.allGames = new FootballGames(props.name);
    }

    /**
     * @private
    */
    _regenerateData(){
        this.setState({ 
            liveScores: this.allGames.getActiveGames(),
            gamesSummary: [],
        });
    }
    
    /**
     * Generate Games Summary report
     * @public
     */
     generateSummary(){
        this.setState({ 
            gamesSummary: this.allGames.getSummary()
        });
    }

    /**
     * Start a new game operation
     * @public
     */
    addGameHandler(){
        const homeTeam = window.prompt('Enter home team name');
        const awayTeam = window.prompt('Enter away team name');
        this.allGames.startNewGame(homeTeam, awayTeam);
        this._regenerateData();
    }

    /**
     * Update score operation
     * @public
     */
     updateGameHandler(){
        const homeTeam = window.prompt('Enter home team name');
        const awayTeam = window.prompt('Enter away team name');
        const homeScore = parseInt(window.prompt('Enter home team score'), 10);
        const awayScore = parseInt(window.prompt('Enter away team score'), 10);
        this.allGames.updateGameScore(homeTeam, awayTeam, homeScore, awayScore);
        this._regenerateData();
    }

    /**
     * Finish game currently in progress operation
     * @public
     */
     endGameHandler(){
        const homeTeam = window.prompt('Enter home team name');
        const awayTeam = window.prompt('Enter away team name');
        this.allGames.finishGame(homeTeam, awayTeam);
        this._regenerateData();
    }

    /**
     * Function we can use to define the HTML code within the HTML element.
     */
    render() {
        return (
            <>
            <Header
                name={this.allGames.getName()}
            />
            <ControlPanel
                onClickSummary={() => this.generateSummary()}
                onClickAddGame={() => this.addGameHandler()}
                onClickUpdateGame={() => this.updateGameHandler()}
                onClickEndGame={() => this.endGameHandler()}
            />
            <Board
                title='Live scores'
                data={this.state.liveScores}
            />
            {this.state.gamesSummary.length ? (
                <SummaryPane
                    title='Summary'
                    data={this.state.gamesSummary}
                />
                ) : (null)
            }
            </>
        );
    }
}

export default App;
