// import logo from './logo.svg';
// import './App.css';
// import Greet from './Component/Greet';
// import Welcome from './Component/Welcome';
// import Hello from './Component/Hello';
// import Message from './Component/Message';
// import Counter from './Component/Counter';
// import FunctionClick from './Component/FunctionClick';
// import ClassClick from './Component/ClassClick';
// import EventBind from './Component/EventBind';
// import ParentComponent from './Component/ParentComponent';
// import UserGreeting from './UserGreeting';
// import NameList from './Component/NameList';
// import Stylesheet from './Component/Stylesheet';

// function App() {
//   return (
//     <div className="App">
//       <Stylesheet/>
//       {/* <NameList/> */}
//       {/* <UserGreeting/> */}
//       {/* <ParentComponent/> */}
//       {/* <EventBind/> */}
//       {/* <FunctionClick/> */}
//       {/* <ClassClick/> */}
//       {/* <Counter/> */}
//       {/* <Greet name="jay" heroName="Batman"/>
//       <Greet name="kishan" heroName="SuperMan"/> */}
//       {/* <Greet/> */}
//       {/* <Message/> */}

//       {/* <Welcome/> */}
//       {/* <Hello/> */}
//     </div>
//   );
// }

// export default App;






//for form 

import React,{Component} from "react";
import './App.css';
// import Form from "./Component/Form";
import LifeCycleA from "./Component/LifeCycleA";
import FragmentDemo from "./Component/FragmentDemo";

 class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Form/> */}
          {/* <LifeCycleA/> */}
          <FragmentDemo/>
      </div>
    )
  }
}

export default App