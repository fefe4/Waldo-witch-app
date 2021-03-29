import demon from "./imgs/demon.png";
import ghost from "./imgs/ghost.png";
import zombies from "./imgs/zombies.png";
import firestore from "./firebaseconfig.js"

const db = firestore 
const docRef = db.collection("Levels").doc("Level1");

function Dropdown() {
  function demonCheck(e) {
    const dropdown = document.getElementsByClassName("foo");
    const position = parseInt(dropdown[0].id)
    console.log(position)
  }

  return (
    <div id="dropdown" className="foo">
      <div className="bar">
        <img id="demon" className="littleIcons" src={demon} alt="demon" />
        <div className="baz">
          <label onClick={demonCheck} id="demon" className="label">
            Demon
          </label>
        </div>
      </div>
      <div className="bar">
        <img className="littleIcons" src={ghost} alt="ghost" />
        <div className="baz">
          <label className="label">Ghost</label>
        </div>
      </div>
      <div className="bar">
        <img className="littleIcons" src={zombies} alt="zombies" />
        <div className="baz">
          <label className="label">Zombies</label>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
