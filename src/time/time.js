import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.State = {
            Time : new Date()
        }
    }

    ashit = ()=>{
        this.setState({
            Time:new Date()
        })
         
    }
    componentDidMount = ()=>{
        this.timeId = setInterval(()=>this.ashit(),1000);
    }
    componentDidUpdate =(prevpropes,prevState)=>{
        if(prevState.Time !== this.State.Time){
           
        }
        
    }
    
    render() {
        return (
            <div>
                {this.State.Time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Time;