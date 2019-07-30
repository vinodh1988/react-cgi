import React from 'react';
import logo from './logo.svg';
import Box from './components/second';
import './App.css';

class App extends React.Component{
     render(){
       let appname="ReactJS application- ABCSoft";
       let developers=["Rahul","Ramu","Kiran","Johnson"];
       let childlist=[["Intelli J","SQL Developer","VS Code"],
                      ["React JS","Java and Spring","SQL"],
                      ["MySQL","MongoDB"]];
      let code= developers.map(x=><li>{x}</li>)
        return(
          <div>
                 <h1> React JS component is working...!!!! </h1>
                 <h4> {appname}</h4>
                 <h4><u>Developers</u></h4>
                 <ul>
                   {code}
                 </ul>
                 <Box title="Tools" items={childlist[0]}></Box>
                 <Box title="Technologies" items={childlist[1]}></Box>
                 <Box title="Databases" items={childlist[2]}></Box>
                 
                 
          </div>
               
        );
     }
}

export default App;
