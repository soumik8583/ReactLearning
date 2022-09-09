import React, { Component } from 'react';
class Message extends Component{
    constructor(){
        super();
        this.state={
            message:'welcome visitor',
            buttonText:'Change State',
            buttonText2:'Revert Changes',
            status:true,
            onclick: () => this.redoState()
        }
    }
    changeState(){
        this.setState(
            {
                message:'Thanks for chageing',
                buttonText:'Revert Changes',
                onclick: () => this.redoState()
                
            }
        )
    }

    redoState(){
        this.setState(
            {
                message:'Welcome again',
                buttonText:'Change State',
                onclick: () => this.changeState()
                
            }
            
        )
    }
    render(){
        return (
        <div>
             <h1>{this.state.message} </h1>
             <button onClick={()=>this.changeState()}>{this.state.buttonText}</button>
           &nbsp;&nbsp;  <button onClick={()=>this.redoState()}>{this.state.buttonText2}</button>
            {
                this.state.status? <button onClick={this.state.}>Show</button>
            }
        </div>
        )
    }
}
export default Message;