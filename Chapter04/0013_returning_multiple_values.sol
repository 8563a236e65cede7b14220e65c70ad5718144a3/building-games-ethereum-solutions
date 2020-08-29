contract ReturnMultiple {
    function getScore (Game game) public view returns
    (uint home, uint away) {
        return (game.homeScore, game.awayScore);
    }
}