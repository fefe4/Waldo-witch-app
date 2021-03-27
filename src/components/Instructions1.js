import React, { useState } from "react";
import cat from "./imgs/cat.png";
import demon from "./imgs/demon.png"
import ghost from "./imgs/ghost.png"
import zombies from "./imgs/zombies.png"


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
            "Ava, send the creatures back to their realm , be careful, the enemy has set up ilussions to deceive us"
          </label>
            <div>
              <div className="iconX">
                <img className="icons" src={demon} alt="demon" />
                <div className="inbetween">
                  <label className="X">X 1</label>
                </div>
              </div>
              <div className="iconX">
                <img className="icons" src={ghost} alt="ghost" />
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

          <button className="buttons" to="/level1" onClick={gameStart}>Begin</button>
          <button className="buttons" to="/Highscore">See Highscore</button>
        </div>
      </div>
    </div>
 
  )
}

export default Home;
