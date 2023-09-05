import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:true    
    }
    }

  render() {

     return this.state.isLoggedIn && <div>Welcome Prince</div>             //4th approch


    //  return(
    //     this.state.isLoggedIn?             //3nd approch     
    //     <div>Welcome Prince</div> :
    //     <div>Welcome Guest</div>
    //  )

    // let message
    // if(this.state.isLoggedIn) {                      //2nd approch
    //     message = <div>Welcome Prince</div>
    // }
    // else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>



//         if(this.state.isLoggedIn){     // 1st approch
//             return(
//                 <div>  Welcome Prince</div>
//             )
//         }
//         else {
//             return(
//                 <div> Welcome Guest </div>
//             )
//         }


    // return (
    //   <div>
    //     <div>Welcome Prince</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting