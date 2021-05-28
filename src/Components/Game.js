import React from "react"
import Square from "./GameSquare"
import "./Game.css"
import Questions from "./Questions"
import Dice from "./Dice"

function Game(){

    return (
          <div className="game">
            
            <div className="game-board">
              <h1>Trivial Pursuit</h1>
              <Dice />
              <div className="board-row">
                
                <Square color = "Orange" piece = "piece"/>
                <Square color = "Green"/>
                <Square color = "Gray"/>
                <Square color = "Hotpink" />
                <Square color = "Gray"/>
                <Square color = "Blue"/>
                <Square color = "Orchid"/>
                <Square color = "Purple"/>
                <Square color = "Gray"/>
                <Square color = "Orange"/>
                <Square color = "Gray"/>
                <Square color = "Hotpink"/>
                <Square color = "Yellow" piece = "piece"/>
              </div>
              <div className="board-row">
                <Square color = "Blue" />
                <Square color = "yellow" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Purple" />
                <Square color = "Green" />
              </div>
              <div className="board-row">
                <Square color = "Gray" />
                <Square />
                <Square color = "Purple" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Blue" />
                <Square />
                <Square color = "Gray" />
              </div>
              <div className="board-row">
                <Square color = "Hotpink" />
                <Square />
                <Square />
                <Square color = "Blue" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Hotpink" />
                <Square />
                <Square />
                <Square color = "Blue" />
              </div>
              <div className="board-row">
                <Square color = "Gray"/>
                <Square />
                <Square />
                <Square />
                <Square color = "Hotpink" />
                <Square />
                <Square />
                <Square />
                <Square color = "Green" />
                <Square />
                <Square />
                <Square />
                <Square color = "Gray"/>
              </div>
              <div className="board-row">
                <Square color = "Purple" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Green"/>
                <Square />
                <Square color = "Orange" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Hotpink" />
              </div>
              <div className="board-row">
                <Square color ="Green" piece = "piece"/>
                <Square color = "Orange" />
                <Square color = "Yellow" />
                <Square color = "Purple" />
                <Square color = "Blue" />
                <Square color = "Hotpink" />
                <Square color = "White" />
                <Square color = "Yellow" />
                <Square color = "Orange" />
                <Square color = "Green" />
                <Square color = "Hotpink" />
                <Square color = "Blue" />
                <Square color = "Purple" piece = "piece"/>
              </div>
              <div className="board-row">
                <Square color = "Yellow" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Blue" />
                <Square />
                <Square color = "Purple" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Orange" />
              </div>
              <div className="board-row">
                <Square color = "Gray" />
                <Square />
                <Square />
                <Square />
                <Square color = "Purple" />
                <Square />
                <Square />
                <Square />
                <Square color = "Yellow" />
                <Square />
                <Square />
                <Square />
                <Square color = "Gray" />
              </div>
              <div className="board-row">
                <Square color = "Blue" />
                <Square />
                <Square />
                <Square color = "Yellow" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Orange" />
                <Square />
                <Square />
                <Square color = "Yellow" />
              </div>
              <div className="board-row">
                <Square color = "Gray" />
                <Square />
                <Square color = "Orange" />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Green" />
                <Square />
                <Square color = "Gray"/>
              </div>
              <div className="board-row">
                <Square color = "Orange" />
                <Square color = "Green"/>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square color = "Hotpink" />
                <Square color = "Green" />
              </div>
              <div className="board-row">
                <Square color = "Hotpink" piece = "piece"/>
                <Square color = "Blue" />
                <Square color = "Gray" />
                <Square color = "Orange" />
                <Square color = "Gray" />
                <Square color = "Green" />
                <Square color ="Orchid" />
                <Square color = "Hotpink" />
                <Square color = "Gray"/>
                <Square color = "Yellow" />
                <Square color = "Gray"/>
                <Square color = "Purple" />
                <Square color = "Blue" piece = "piece"/>
              </div>
              
            </div>
            <Questions />
          </div>
        
      );
}

export default Game