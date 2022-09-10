import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increament=()=>{
   var c =  this.state.count+=1;
    this.setState(
        {
            count:c
        }
    )
    console.log(c);
    }
  render() {
    return (
      <div>
        Count - {this.state.count}
        <br/><button onClick={()=>this.increament()}>Increament</button>
      </div>
    )
  }
}

export default Counter