import React from 'react';
import logo from './logo.svg';
import Box from './components/second';
import './App.css';

class App extends React.Component{
     render(){
       let appname="ReactJS application- ABCSoft";
       let developers=["Rahul","Ramu","Kiran","Johnson"];
      let code= developers.map(x=><li>{x}</li>)
        return(
          <div>
                 <h1> React JS component is working...!!!! </h1>
                 <h4> {appname}</h4>
                 <h4><u>Developers</u></h4>
                 <ul>
                   {code}
                 </ul>
                 <Box></Box>
                 <Box></Box>
                 <Box></Box>
                 
                 
          </div>
               
        );
     }
}

export default App;
