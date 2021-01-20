const View = require("./ttt-view")// require appropriate file
const Game = require("../solution_2/game.js")// require appropriate file

  $(() => {
    // Your code here
    const game = new Game();
    const view = $('.ttt');
    new View(game, view);
  });

  // Complete the require statements in src/index.js to require ttt-view and the game as dependencies. When webpack processes index.js (the entry file), it will include all required files within main.js (the output file).