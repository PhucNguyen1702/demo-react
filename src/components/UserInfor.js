import React from "react";
class UserInfor extends React.Component{
    state = {
        name : "Phuc",
        age : 23,
        address :"Quang Nam"
    }
    handleOnChange =(event) =>{
        this.setState({
            name : event.target.value
        })
        console.log(event.target.value);
    }
    handleOnSubmit =(event)=>{
        event.preventDefault();
        alert("me")
    }
    handleOnChangeAge =(event)=>{
        this.setState({
            age :event.target.value
        })
    }
    render(){
        return(
            //JSX
            <div>My first Component
                My name is {this.state.name} and I'm  {this.state.age};
                {/*<button onClick={(event)=>{this.handleClick(event)}}>Click me</button>*/}
                {/*<button onMouseOver={this.handleOnMouse}>Hover me</button>*/}
                <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
                    <input  onChange={(event)=>{this.handleOnChange(event)}}
                            type="text"
                            value={this.state.name}
                    />
                    <button>Submit</button>
                    <input  onChange={(event)=>{this.handleOnChangeAge(event)}}
                            type="text"
                            value={this.state.age}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfor