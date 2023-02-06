// class components
// function components

import React, {useState} from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponents extends React.Component{
//     state = {
//         listUser: [
//             {id:1,name: "Phuc",age: 23,address: "Quang Nam"},
//             {id:2,name: "Nguyen", age: 22, address: "Quang Ninh"},
//             {id:3,name: "Ngoc", age: 24, address: "Quang Binh"}
//         ]
//         }
//      handleAddNewUser=(objUser)=>{
//         console.log("Check .....",objUser);
//         this.setState({
//             listUser :[objUser,...this.state.listUser]
//         })
//      }
//      handleDeleteUser =(userid) =>{
//         let listUserClone = [...this.state.listUser];
//         console.log("check <<<",listUserClone)
//         listUserClone = listUserClone.filter(item => item.id !== userid);
//         this.setState({
//             listUser :listUserClone
//         })
//      }
//
//     render() {
//         const myInfor=['ab','ac','ad'];
//         return(
//             <div>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
//                 <DisplayInfor
//                     listUser={this.state.listUser}
//                     deleteUser={this.handleDeleteUser}
//                 >
//                 </DisplayInfor>
//             </div>
//
//         )
//     }
// }
const MyComponents = (props) => {
    const [listUser,setListUser]= useState([ {id:1,name: "Phuc",age: 23,address: "Quang Nam"},
            {id:2,name: "Nguyen", age: 22, address: "Quang Ninh"},
            {id:3,name: "Ngoc", age: 24, address: "Quang Binh"}])
     const handleAddNewUser=(objUser)=>{
         setListUser([objUser,...listUser])
     }
     const handleDeleteUser =(userid) =>{
        let listUserClone = listUser;
        console.log("check <<<",listUserClone)
        listUserClone = listUserClone.filter(item => item.id !== userid);
        // this.setState({
        //     listUser :listUserClone
        // })
         setListUser(listUserClone);
     }
  return(
      <div>
                <AddUserInfor handleAddNewUser={handleAddNewUser}></AddUserInfor>
                <DisplayInfor
                    listUser={listUser}
                    deleteUser={handleDeleteUser}
                >
                </DisplayInfor>
      </div>
  )
}
export default MyComponents;