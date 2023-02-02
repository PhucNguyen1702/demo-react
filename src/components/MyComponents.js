// class components
// function components

import React from "react";
class MyComponents extends React.Component{
    state = {
        name : "Phuc",
        age : 23,
        address :"Quang Nam"
    }
    handleClick (event)
    {
        console.log("Click my button");
        console.log("My name is " +this.state.name);
        // Doi voi class Merge state
        this.setState({
            name :"Nguyen",
            age :Math.floor(Math.random() * 100) //merge class
        })
        // this.setState({
        //     age :Math.floor(Math.random() * 100)
        // })
    }
    handleOnMouse(event)
    {
        // console.log(event.target);
    }
    render() {
        return(
            //JSX
                <div>My first Component
                    My nam is {this.state.name} and I'm  {this.state.age};
                    <button onClick={(event)=>{this.handleClick(event)}}>Click me</button>
                    <button onMouseOver={this.handleOnMouse}>Hover me</button>
                </div>
        )
    }
}
export default MyComponents;