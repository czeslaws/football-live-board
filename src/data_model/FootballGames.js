import Game from "./Game"

/**
 * @namespace data_model
 */


/** Class representing a set of football games e.g. championship 
 * @memberOf data_model
 */
class FootballGames {
    /**
     * @constructor
     * @param {string} name The board name
     */
    constructor(name){
        this._name = name || 'Football Games';
        this._id = 0;
        this._allGames = [];
        console.log(`Created FootballGames object for ${name} games`);
    }

    /**
     * @public
     * @return {string} Name of the games
     */
    getName(){
        return this._name;
    }

    /**
     * @private
     */
     _findGame(home, away){
        const homeTeam = home.toLowerCase();
        const awayTeam = away.toLowerCase();
        const game = this._allGames.find(
            game => game.homeTeam.toLowerCase() === homeTeam && game.awayTeam.toLowerCase() === awayTeam
        );
        return game;
     }

    /**
     * Start a new game, assuming initial score 0 – 0 and adding it the scoreboard
     * @public
     * @param {string} homeTeam Home team name
     * @param {string} awayTeam Away team name
     */
     startNewGame(homeTeam, awayTeam){
        console.log(`startNewGame(${homeTeam}, ${awayTeam})`);
        if (homeTeam && awayTeam){
            this._allGames.push(Game.createNew(this._id++, homeTeam, awayTeam));
        }
        else{
            console.log(`startNewGame: Invalid parameters provided: ${homeTeam},  ${awayTeam}.`);
        }
    }

    /**
     * Method updating game score
     * @public
     * @param {string} homeTeam Home team name
     * @param {string} awayTeam Away team name
     * @param {number} homeScore Home team score
     * @param {number} awayScore Away team score
     */
     updateGameScore(homeTeam, awayTeam, homeScore, awayScore){
        console.log(`updateGameScore(${homeTeam}, ${awayTeam}, ${homeScore}, ${awayScore})`);
        if (isNaN(homeScore) || isNaN(awayScore)){
            console.log(`updateGameScore: Invalid score: ${homeScore},  ${awayScore}.`);
            return;
        }
        const game = this._findGame(homeTeam, awayTeam);
        if (game && game.status === Game.ACTIVE_GAME_STATUS){
            game.homeScore = homeScore;
            game.awayScore = awayScore;
        }
        else {
            console.log(`updateGameScore: Unknown game: ${homeTeam},  ${awayTeam}.`);
        }
    }

    /**
     * Finish game currently in progress
     * @public
     * @param {string} homeTeam Home team name
     * @param {string} awayTeam Away team name
     */
     finishGame(homeTeam, awayTeam){
        console.log(`finishGame(${homeTeam}, ${awayTeam})`);
        const game = this._findGame(homeTeam, awayTeam);
        if (game){
            game.status = Game.FINISHED_GAME_STATUS;
        }
        else{
            console.log(`finishGame: Unknown game: ${homeTeam},  ${awayTeam}.`);
        }
    }

    /**
     * Get games in progress ordered by start time (first created on top)
     * @public
     * @return {Array} Array of game objects which are currently active
     * Active games are added to the newly returned array.
     */
     getActiveGames(){
        return this._allGames.filter(game => (game.status === Game.ACTIVE_GAME_STATUS));
    }

    /**
     * Get a summary of games in progress ordered by their total score - descending (higher total score on top)
     * @public
     * @return {Array} Array of active game objects ordered by their total score.
     * The games with the same total score will be returned ordered by the most recently started match in the scoreboard
     */
    getSummary(){
        function compare(a, b){
            const aTotal = a.homeScore + a.awayScore;
            const bTotal = b.homeScore + b.awayScore;
            if (aTotal === bTotal){
                return (b.id - a.id);
            }
            else{
                return (bTotal - aTotal);
            }
        }
        return this.getActiveGames().sort(compare);
    }
}

export default FootballGames;
