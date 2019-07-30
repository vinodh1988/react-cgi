import React from 'react';
import './second.css';

class Second extends React.Component{
    constructor(props){
        super(props);
        console.log("Second component(box) Constructor")
    }
    componentWillMount(){
        console.log("Component about to be rendered(box)");
    }
    render(){
        console.log("box component rendering")
        
        let code=this.props.items.map(x=><li key={x}>{x}</li>);
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