import demon from "./imgs/demon.png";
import ghost from "./imgs/ghost.png";
import zombies from "./imgs/zombies.png";
import firestore from "./firebaseconfig.js";
import WinAlert from "./WinAlert"
import {useState} from "react"

const db = firestore;
const docRef = db.collection("Levels").doc("Level1");


function Dropdown() {
  const [score, setScore] = useState(0)
  function winCheck() {
    if (
      document.getElementById("demonContainer") === null &&
      document.getElementById("ghostContainer") === null &&
      document.getElementById("zombiesContainer") === null
    ) {
      const timer = document.getElementById("timer").textContent;
      const timeLeft = timer.split(" ", 1)
      console.log(timeLeft)      
      const scoreInSecs = 300 - timeLeft[0];
      const score = `${Math.trunc(scoreInSecs / 60)}mins ${scoreInSecs % 60}secs`;     
      setScore(score)
      const modalWin = document.getElementById("modalWin");
      modalWin.style.display = "block"
      
    }
  }  
  function demonCheck() {
    const dropdown = document.getElementsByClassName("foo");
    const position = parseInt(dropdown[0].id);
    console.log(position);
    let check;
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          doc.data().demon === position || doc.data().demon === position
            ? (check = true)
            : (check = false);
          if (check === true) {
            console.log("a");
            const demon = document.getElementById("demonContainer");
            demon.remove();
            winCheck();
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function ghostCheck() {
    const dropdown = document.getElementsByClassName("foo");
    const position = parseInt(dropdown[0].id);
    console.log(position);
    let check;
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          doc.data().ghost === position ? (check = true) : (check = false);
          if (check === true) {
            console.log("a");
            const ghost = document.getElementById("ghostContainer");
            ghost.remove();
            winCheck();
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function zombiesCheck() {
    const dropdown = document.getElementsByClassName("foo");
    const position = parseInt(dropdown[0].id);
    console.log(position);
    let check;
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          doc.data().zombies === position ? (check = true) : (check = false);
          if (check === true) {
            console.log("a");
            const zombies = document.getElementById("zombiesContainer");
            zombies.remove();
            winCheck();
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  return (
    <div>
      <WinAlert score={score}/>
    <div id="dropdown" className="foo">
      <div id="demonContainer" className="bar">
        <img id="demon" className="littleIcons" src={demon} alt="demon" />
        <div onClick={demonCheck} className="baz">
          <label id="demon" className="label">
            Demon
          </label>
        </div>
      </div>
      <div id="ghostContainer" className="bar">
        <img className="littleIcons" src={ghost} alt="ghost" />
        <div onClick={ghostCheck} className="baz">
          <label className="label">Ghost</label>
        </div>
      </div>
      <div id="zombiesContainer" className="bar">
        <img className="littleIcons" src={zombies} alt="zombies" />
        <div onClick={zombiesCheck} className="baz">
          <label className="label">Zombies</label>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dropdown;
