import React from 'react';
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
     }
     render(){
       
      let code= this.state.developers.map(x=><li>{x}</li>)
        return(
          <div>
                 <h1> React JS component is working...!!!! </h1>
                 <h4> {this.state.appname}</h4>
                 <h4><u>Developers</u></h4>
                 <ul>
                   {code}
                 </ul>
                 <Box title="Tools" items={this.state.childlist[0]}></Box>
                 <Box title="Technologies" items={this.state.childlist[1]}></Box>
                 <Box title="Databases" items={this.state.childlist[2]}></Box>
                 
                 
          </div>
               
        );
     }
}

export default App;
