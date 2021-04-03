import React, { useState } from "react";
import {Link} from "react-router-dom"
import witch from "./imgs/witch.png";



function Home() {
 
  return(
  <div> 
  
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <div className="linksContainer">             
            <Link to="/Highscore">
              <button className="links">See Highscore</button>
            </Link>
            <Link  to="/level1" >
              <button className="links">Start New Game</button>
            </Link>
          </div>
        
        <img className="witch" src={witch} alt="witch" />
        <div className="introduction">
          <label>
            Help the Witch to find the demons before they invade the forest
          </label>
          
     </div>
     </div>
    </div>
  </div>
  )
}

export default Home;
