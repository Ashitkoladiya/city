import React, { Component } from 'react';

class container extends Component {
    constructor(props) {
        super(props);
        this.state={
            Country : 'india'
        };
    }

    Country = ()=>{
        this.setState({
            Country : 'uk'
        })
    }
    
    render() {
        return (
           <>
            <div>country:{this.state.Country}</div>
            <button onClick={()=>this.Country()}>change</button>
           </>
        );
    }
}

export default container;