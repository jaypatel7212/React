import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message :"Good Bye"
    //     })
    //     console.log(this)
    // }

    clickHandler= () => {
        this.setState({
            message:'GoodBye '
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* //1st approch */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* //2nd approch array functionn approch    */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button>  */}
        {/* 3rd approch */}
        <button onClick={this.clickHandler}>Click</button> 
        {/* 4th approch */}
      </div>
    )
  }
}

export default EventBind