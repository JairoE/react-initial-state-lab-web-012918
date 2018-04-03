// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component{
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){

    if(this.state.secondsLeft > 0){
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }else{
      return <h1>Boom!</h1>
    }

  }
}

export default Bomb;
