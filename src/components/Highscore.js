import {useState, useEffect} from 'react'
import './highscore.css'
import firestore from "./firebaseconfig.js";
const db = firestore;
const docRef = db.collection("HighScore").doc("Level 1");



function Highscore () {
  const [scores,setScores] =useState([])

    docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        const obj = doc.data()
        let newScores = []
          for (let property in obj) {        
          let a = {
            ranker:property,
            score:obj[property]
          }       
          newScores.push(a)          
        }      
        newScores.sort((a,b)=>{
          return (a.score > b.score)
        })
        setScores(newScores)
      } 
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
 
 

  return (
    <div>
      <h1>Highscore</h1>
      <h2>Level 1</h2>
      <ul>
        {scores.map((score)=>{
          return (
            <li>
              <h4>{score.ranker}</h4>
              <h4>{score.score} secs</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Highscore