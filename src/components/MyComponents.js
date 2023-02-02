// class components
// function components

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component{
    state = {
        listUser: [
            {id:1,name: "Phuc",age: 23,address: "Quang Nam"},
            {id:2,name: "Nguyen", age: 22, address: "Quang Ninh"},
            {id:3,name: "Ngoc", age: 24, address: "Quang Binh"}
        ]
        }

    render() {
        const myInfor=['ab','ac','ad'];
        return(
            <div>
                <UserInfor></UserInfor>
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>

        )
    }
}
export default MyComponents;