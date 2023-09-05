import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Count:0
      }
    }

    increment = () =>{
        // this.state.Count= this.state.Count+1
        // console.log(this.state.Count);
        this.setState({
            Count:this.state.Count + 1
        })
    }

  render() {
    return (
        <div>
      <div>Count-{this.state.Count}</div>
      <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  } 
}

export default Counter