import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Box from './components/second';
import './App.css';

class App extends React.Component{
     constructor(props){
       super(props);
       this.state={
           appname:"ReactJS application- ABCSoft",
           developers:["Rahul","Ramu","Kiran","Johnson"],
           childlist:[["Intelli J","SQL Developer","VS Code"],
                       ["React JS","Java and Spring","SQL"],
                       ["MySQL","MongoDB"]]
       }

       this.handleStore=this.handleStore.bind(this);
       console.log("APP Component constructor");
     }

     handleStore(){
        let item=ReactDOM.findDOMNode(this.refs.itemname).value;
        let type=Number(ReactDOM.findDOMNode(this.refs.type).value);
        this.state.childlist[type].push(item);
        this.setState(this.state);
        
     }
     componentWillMount(){
       console.log("First Rendering is going to happen");
     }
     render(){

      console.log("APP component rendering..!!!")
       
      let code= this.state.developers.map(x=><li key={x}>{x}</li>)
        return(
          <div>
                 <h1> React JS component is working...!!!! </h1>
                 <h4> {this.state.appname}</h4>
                 <h4><u>Developers</u></h4>
                 <ul>
                   {code}
                 </ul>
                 <div id="form">
                    Item <input type="name" ref="itemname"/>
                    <select ref="type">
                      <option value="0">tools</option>
                      <option value="1">technologies</option>
                      <option value="2">databases</option>
                    </select>
                    <button 
                    style={{color:"white",
                    border: "none",backgroundColor:"darkRed",padding:"10px"}}
                    onClick={this.handleStore}>
                    Add Item</button>
                 </div>
                 <div id="container">
                 <Box title="Tools" items={this.state.childlist[0]}></Box>
                 <Box title="Technologies" items={this.state.childlist[1]}></Box>
                 <Box title="Databases" items={this.state.childlist[2]}></Box>
                 </div>
                
                 
          </div>
               
        );
     }

     componentDidMount(){
       console.log("Component mounted");
     }
}

export default App;
