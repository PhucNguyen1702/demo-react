import React from "react";
import './DisplayInfor.scss';
// class DisplayInfor extends React.Component {
//
//     render(){
//         //props => propoties  tai san
//         console.log(this.props);
//         // Detructuring
//         const {listUser} =this.props;
//         return(
//             <div className={'display-infor-container'}>
//                 {true &&
//                     //Fragment
//                         <>
//                         {
//                             listUser.map((user, index) => {
//                                 console.log(user);
//                                 return (
//                                     <div key={user.id} className={user.age > 22 ? "green" : "red"}>
//                                         <div>My name is {user.name} </div>
//                                         <div>I'm am {user.age}</div>
//                                         <div>I'm live {user.address}</div>
//                                         <button onClick={()=>this.props.deleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 )
//                             })
//                         }
//                         </>
//                 }
//
//             </div>
//
//         )
//     }
// }
const DisplayInfor = (props) => {
        //props => propoties  tai san
        // Detructuring
        const {listUser} =props;
        return(
            <div className={'display-infor-container'}>
                {true &&
                    //Fragment
                        <>
                        {
                            listUser.map((user, index) => {
                                console.log(user);
                                return (
                                    <div key={user.id} className={user.age > 22 ? "green" : "red"}>
                                        <div>My name is {user.name} </div>
                                        <div>I'm am {user.age}</div>
                                        <div>I'm live {user.address}</div>
                                        <button onClick={()=>props.deleteUser(user.id)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                        </>
                }
            </div>
        )
}
export default DisplayInfor;