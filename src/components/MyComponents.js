// class components
// function components

import React from "react";
class MyComponents extends React.Component{
    state = {
        name : "Phuc",
        age : 23,
        address :"Quang Nam"
    }
    handleClick ()
    {
        console.log("Click my button")
    }
    handleOnMouse(event)
    {
        console.log(event.target)
    }
    render() {
        return(
            //JSX
                <div>My first Component
                    My nam is {this.state.name} and I'm live in {this.state.address};
                    <button onClick={this.handleClick}>Click me</button>
                    <button onMouseOver={this.handleOnMouse}>Hover me</button>
                </div>
        )
    }
}
export default MyComponents;