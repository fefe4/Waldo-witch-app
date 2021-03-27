import React from 'react'

const Boxes = (props) => {
  let boxes = []
  for (let i = 0; i<180 ; i++) {
    boxes.push({
      id:i
    })
  }
  return( 
    boxes.map((box)=>{
      return <div id={box.id} key={box.id} className="box"></div>
    })    
  )
}

export default Boxes;