import React, {useEffect} from "react";
import level1 from "./imgs/level1.jpg"
import './Level1.css'
import Instructions1 from "./Instructions1"
import Boxes from "./Boxes"
import Dropdown from "./Dropdown"
import dropdownListener from "./dropdownListener"



const Level1 = (props) => {
 
  useEffect(() => {
    dropdownListener()
  });

  return (
    <div>
      
    <div className="boxContainer">
      <img className="level1" src={level1} alt="level1"></img>
      <label id="timer" className="timer"></label>
      <Instructions1/>
      
      <Boxes/>
      
    </div>
      <Dropdown/>
    </div>
  )
};

export default Level1;

