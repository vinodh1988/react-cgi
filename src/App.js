import React from 'react';
import logo from './logo.svg';
import Box from './components/second';
import './App.css';

class App extends React.Component{
     render(){
        return(
          <div>
                 <h1> React JS component is working...!!!! </h1>
                 <Box></Box>
                 <Box></Box>
                 <Box></Box>
          </div>
               
        );
     }
}

export default App;
