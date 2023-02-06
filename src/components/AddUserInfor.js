import React, {useState} from "react";
// class AddUserInfor extends React.Component{
//     state = {
//         name : "Phuc",
//         age : 23,
//         address :"Quang Nam"
//     }
//     handleOnChange =(event) =>{
//         this.setState({
//             name : event.target.value
//         })
//         console.log(event.target.value);
//     }
//     handleOnSubmit =(event)=>{
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id :Math.floor(Math.random() * 100)+"random",
//             name :this.state.name,
//             age :this.state.age,
//         });
//     }
//     handleOnChangeAge =(event)=>{
//         this.setState({
//             age :event.target.value
//         })
//     }
//     render(){
//         return(
//             //JSX
//             <div>My first Component
//                 My name is {this.state.name} and I'm  {this.state.age};
//                 {/*<button onClick={(event)=>{this.handleClick(event)}}>Click me</button>*/}
//                 {/*<button onMouseOver={this.handleOnMouse}>Hover me</button>*/}
//                 <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
//                     <input  onChange={(event)=>{this.handleOnChange(event)}}
//                             type="text"
//                             value={this.state.name}
//                     />
//                     <input  onChange={(event)=>{this.handleOnChangeAge(event)}}
//                             type="text"
//                             value={this.state.age}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
const AddUserInfor = (props) => {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [address,setAddress]=useState("");
    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id :Math.floor(Math.random() * 100)+"random",
            name :name,
            age :age,
        })
    }
        return(
            //JSX
            <div>My first Component
                My name is {name} and I'm  {age};
                {/*<button onClick={(event)=>{this.handleClick(event)}}>Click me</button>*/}
                {/*<button onMouseOver={this.handleOnMouse}>Hover me</button>*/}
                <form onSubmit={(event)=>{handleOnSubmit(event)}}>
                    <input  onChange={(event)=>{handleOnChangeName(event)}}
                            type="text"
                            value={name}
                    />
                    <input  onChange={(event)=>{handleOnChangeAge(event)}}
                            type="text"
                            value={age}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
}
export default AddUserInfor