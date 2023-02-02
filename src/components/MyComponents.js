// class components
// function components

import React from "react";
class MyComponents extends React.Component{
    state = {
        name : "Phuc",
        age : 23,
        address :"Quang Nam"
    }
    render() {
        return(
            //JSX
                <div>My first Component
                    My nam is {this.state.name} and I'm live in {this.state.address};
                </div>
        )
    }
}
export default MyComponents;