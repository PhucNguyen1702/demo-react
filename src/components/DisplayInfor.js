import React from "react";
class DisplayInfor extends React.Component {
    render(){
        //props => propoties  tai san
        console.log(this.props);
        // Detructuring
        const {name,age} =this.props;

        return(
            <div>
                <div>My name is {name} </div>
                <div>I am {age}</div>
            </div>
        )
    }
}
export default DisplayInfor;