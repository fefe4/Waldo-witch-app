import firestore from "./firebaseconfig.js";
const db = firestore;
const docRef = db.collection("HighScore").doc("Level 1");

function WinAlert (props) {
  function addScore () {
    const name = document.getElementById("name").value 
    const scoreLabel = document.getElementById("score").textContent
    const score = scoreLabel.replace("You Passed! in ", "")

    return docRef.update({
      [ name]: score
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
  }
  return(
      <div id="modalWin" className="modalWin">
        <div className="instructions-content winContent">    
            
          <label id="score">You Passed! in {props.score}</label>       
          <div className="score">
            <label>Enter your name</label>
            <input id="name"></input>
          </div> 
          <button onClick={addScore} className="buttons">Add Score to Highscore</button>
        </div>
      </div>
  )
}

export default WinAlert