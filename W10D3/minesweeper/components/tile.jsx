import React from 'react'

class Tile extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
      // have tile info through props.tile
      // we want to make a className based on tile ->
      // - bombed, flagged, explored

      // when clicked -> change the underlying Tile through updateGame
      // 
    }
    render() {
      //className for bombed, explored, flagged - 
      //generate that string based on Tile's properties
      debugger
      return (
        <>
          <div className="tile"></div>
        </>
      )
    }
  }

  export default Tile