import React from 'react';
import './second.css';

class Second extends React.Component{
    render(){
        console.log(this.props.items);
        let code=this.props.items.map(x=><li>{x}</li>);
        return(
            <div className="box">
                <h3>{this.props.title}</h3>
                <hr/>
                <ul>
                  {code}
                </ul>
             </div>
        )
    }
}

Second.defaultProps={title:"Dummy title"}

export default Second;