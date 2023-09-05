import React,{Component} from "react";

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state= {      // state object
            message:'Welcome visitor'
        }
    }

    changeMessage = () =>{
        this.setState({
            message:'Thank you for Subscribing'
        });
    }
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ); 
    }
}

// class Message extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964
//       };
//     }
//     changeColor = () => {
//       this.setState({color: "blue"});
//     }
//     render() {
//       return (
//         <div>
//           <h1>My {this.state.brand}</h1>
//           <p>
//             It is a {this.state.color}
//             {this.state.model}
//             from {this.state.year}.
//           </p>
//           <button
//             type="button"
//             onClick={this.changeColor}
//           >Change color</button>
//         </div>
//       );
//     }
//   }

export default Message