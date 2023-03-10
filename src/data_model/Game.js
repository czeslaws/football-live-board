/** Static helper class representing a football game 
 * @memberOf data_model
 */
class Game {
    /** @member {string} */
    static get ACTIVE_GAME_STATUS()   { return 'active'};
    /** @member {string} */
    static get FINISHED_GAME_STATUS() { return 'finished'};

    /**
     * @static
     * @param {string} id
     * @param {string} homeTeam
     * @param {string} awayTeam
     * @return {object} New Game object
     */
    static createNew(id, homeTeam, awayTeam){
        return {
            id: id,
            status: this.ACTIVE_GAME_STATUS,
            homeTeam,
            homeScore: 0,
            awayTeam,
            awayScore: 0,
        };
    }
};

export default Game;
