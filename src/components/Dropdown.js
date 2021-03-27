import demon from "./imgs/demon.png"
import ghost from "./imgs/ghost.png"
import zombies from "./imgs/zombies.png"

function Dropdown () {
  return (
    <div id="dropdown" className="foo">
      <div className="bar">
        <img id="demon" className="littleIcons" src={demon} alt="demon" />
        <div className="baz"> 
          <label className="label">Demon</label>
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
  )
}

export default Dropdown;