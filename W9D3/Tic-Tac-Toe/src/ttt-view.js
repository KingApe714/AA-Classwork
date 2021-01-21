class View {
  constructor(game, $el) {
    // debugger
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e) => {
      let $li = $(e.target)
      let pos = $li.data("square")
      this.makeMove(pos)
    })
  }

  makeMove($square) {
    debugger 
    let playa = this.game.currentPlayer;




  }

  setupBoard() {
    const $ul = $("<ul>")
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let $li = $('<li>')
        $li.data("square", [i, j])
        $ul.append($li)
      }
    }
    this.$el.append($ul)
  }
}

module.exports = View;
