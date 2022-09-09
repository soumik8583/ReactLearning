import React, { Component } from 'react';
class Welcome extends Component{
    render(){
        return ( <div>
        <h1>Hello In class component video </h1>
         <p> {this.props.name}</p>
         {this.props.prop2}
        </div>
        )
    }
}
export default Welcome;