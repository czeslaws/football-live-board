
import FootballGames from './FootballGames';
import Game from './Game';

test("FootballGames: initilize empty and assign name", () => {
    const testName = "Football Test Games 2023 World Cup";
    let testGames = new FootballGames(testName);
    expect(testGames._name).toBe(testName);
    let activeGames = testGames.getActiveGames();
    expect(activeGames.length).toBe(0);
    let summaryReport = testGames.getSummary();
    expect(summaryReport.length).toBe(0);
});

test("FootballGames: start 6 new games", () => {
    let testGames = new FootballGames("Test Games");

    testGames.startNewGame('Pol', 'Mex');
    testGames.startNewGame('Arg', 'KSA');
    testGames.startNewGame('Pol', 'KSA');
    testGames.startNewGame('Arg', 'Mex');
    testGames.startNewGame('Pol', 'Arg');
    testGames.startNewGame('Mex', 'KSA');

    let activeGames = testGames.getActiveGames();
    expect(activeGames.length).toBe(6);
    expect(activeGames[0].id).toBe(0);
    expect(activeGames[0].status).toBe(Game.ACTIVE_GAME_STATUS);

    let summaryReport = testGames.getSummary();
    expect(summaryReport.length).toBe(6);
    expect(summaryReport[0].id).toBe(5);
    expect(summaryReport[0].status).toBe(Game.ACTIVE_GAME_STATUS);
});

test("FootballGames: update games and generate report", () => {
    let testGames = new FootballGames("Test Games");
    const topSummary = {
        id: 5,
        status: 'active',
        homeTeam: 'Mex',
        homeScore: 2,
        awayTeam: 'KSA',
        awayScore: 1
    };
    const topGames = {
        id: 0,
        status: 'active',
        homeTeam: 'Pol',
        homeScore: 1,
        awayTeam: 'Mex',
        awayScore: 1
    };

    testGames.startNewGame('Pol', 'Mex');
    testGames.startNewGame('Arg', 'KSA');
    testGames.startNewGame('Pol', 'KSA');
    testGames.startNewGame('Arg', 'Mex');
    testGames.startNewGame('Pol', 'Arg');
    testGames.startNewGame('Mex', 'KSA');

    testGames.updateGameScore('Arg', 'Mex', 3, 0);
    testGames.updateGameScore('Mex', 'KSA', 2, 1);
    testGames.updateGameScore('Pol', 'USA', 1, 1); //error case
    testGames.updateGameScore('Pol', 'Mex', 1, 1);
    testGames.updateGameScore('Arg', 'KSA', 1, 2);
    testGames.updateGameScore('Pol', 'KSA', 2, 0);
    testGames.updateGameScore('Pol', 'Arg', 0, 3);

    let activeGames = testGames.getActiveGames();
    expect(activeGames.length).toBe(6);
    expect(activeGames[0]).toEqual(topGames);
    console.log(activeGames);

    let summaryReport = testGames.getSummary();
    expect(summaryReport.length).toBe(6);
    expect(summaryReport[0]).toEqual(topSummary);
    console.log(summaryReport);
});

test("FootballGames: finish active games", () => {
    let testGames = new FootballGames("Test Games");

    testGames.startNewGame('Pol', 'Mex');
    testGames.startNewGame('Arg', 'KSA');
    testGames.startNewGame('Pol', 'KSA');
    testGames.startNewGame('Arg', 'Mex');
    testGames.startNewGame('Pol', 'Arg');
    testGames.startNewGame('Mex', 'KSA');

    testGames.updateGameScore('Arg', 'Mex', 3, 0);
    testGames.updateGameScore('Mex', 'KSA', 2, 1);
    testGames.updateGameScore('Pol', 'USA', 1, 1); //error case
    testGames.updateGameScore('Pol', 'Mex', 1, 1);
    testGames.updateGameScore('Arg', 'KSA', 1, 2);
    testGames.updateGameScore('Pol', 'KSA', 2, 0);
    testGames.updateGameScore('Pol', 'Arg', 0, 3);

    testGames.finishGame('Rus', 'Pol'); //error case
    testGames.finishGame('Mex', 'KSA');
    testGames.finishGame('Pol', 'KSA');
    testGames.finishGame('Pol', 'Mex');

    let activeGames = testGames.getActiveGames();
    expect(activeGames.length).toBe(3);
    expect(activeGames[0].id).toBe(1);
    expect(activeGames[0].status).toBe(Game.ACTIVE_GAME_STATUS);

    let summaryReport = testGames.getSummary();
    expect(summaryReport.length).toBe(3);
    expect(summaryReport[0].id).toBe(4);
    expect(summaryReport[0].status).toBe(Game.ACTIVE_GAME_STATUS);
});
