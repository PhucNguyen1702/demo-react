import React from "react";
class DisplayInfor extends React.Component {
    render(){
        //props => propoties  tai san
        console.log(this.props);
        // Detructuring
        const {listUser} =this.props;

        return(
           <div>
               {
                   listUser.map((user,index)=>{
                    // console.log(user);
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name} </div>
                            <div>I'm am {user.age}</div>
                            <div>I'm live {user.address}</div>
                        </div>
                   )
                   })
               }
           </div>
        )
    }
}
export default DisplayInfor;