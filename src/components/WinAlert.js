function WinAlert (props) {

  return(
      <div id="modalWin" className="modalWin">
        <div className="instructions-content winContent">    
            
          <label>You Passed! in {props.score}</label>       
          <div className="score">
            <label>Enter your name</label>
            <input ></input>
          </div> 
          <button className="buttons">Add Score to Highscore</button>
        </div>
      </div>
  )
}

export default WinAlert