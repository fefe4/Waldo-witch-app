import React, { useState } from "react";
import cat from "./imgs/cat.png";
import ghost from "./imgs/ghost.png"
import demon from "./imgs/demon.png"
import zombies from "./imgs/zombies.png"
import counter from "./timer"

function Home() {
  const [start, setStart] = useState(false);
  

  function gameStart(e) {
    setStart(true);
    console.log(start)
  }
  return(
  
    start? <div className="hidden"></div>
    :<div id="myModal" className="modal-instructions">
      <div className="instructions-content">
        <span className="close">&times;</span>
        <img className="cat" src={cat} alt="cat" />
        <div className="instructions">
          <label>
           
          </label>
            <div>
              <div className="iconX">
                <img className="icons" src={ghost} alt="ghost" />
                <div className="inbetween">
                  <label className="X">X 1</label>
                </div>
              </div>
              <div className="iconX">
                <img className="icons" src={demon} alt="demon" />
                <div className="inbetween">
                  <label className="X">X 1</label>
                </div>
              </div>
              <div className="iconX">
                <img className="icons" src={zombies} alt="zombies" />
                <div className="inbetween">
                  <label className="X">X 1</label>
                </div>
              </div>
         
            </div>

          <button className="buttons" to="/level1" onClick={() => {gameStart(); counter()}}>Begin</button>
          <button className="buttons" to="/Highscore">See Highscore</button>
        </div>
      </div>
    </div>
 
  )
}

export default Home;

