contract LoopExample {
    constructor () {
        uint[] memory game_ids = new uint[](games.length);

        for (uint i=0; i<games.length; i++) {
            game_ids[i] = (games[i].id);
        }

        for (uint i=0; i<games.length; i++) {
            if (games[i].id == game_id) {
                Game game = games[i];
                break;
            }
        }

        uint insertIndex = stack.length;
        while (insertIndex > 0 &&
            bid.limit <= stack[insertIndex-1].limit){
            insertIndex--;
        }

    }
}