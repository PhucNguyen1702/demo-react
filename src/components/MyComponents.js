// class components
// function components

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component{

    render() {
        const myInfor=['ab','ac','ad'];
        return(
            <div>
                <UserInfor></UserInfor>
                <DisplayInfor name={"Phuc"} age={23} myInfor={myInfor}></DisplayInfor>
            </div>

        )
    }
}
export default MyComponents;