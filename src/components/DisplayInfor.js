import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
class DisplayInfor extends React.Component {
    state = {
        hideList :true,
    }
    handleOnClick =()=>{
        // console.log("Click me");
        this.setState({
            hideList :!this.state.hideList
        })
    }
    render(){
        //props => propoties  tai san
        console.log(this.props);
        // Detructuring
        const {listUser} =this.props;
        return(
            <div className={'display-infor-container'}>
                <img src={logo}/>
                <div>
                    <span onClick={()=>{this.handleOnClick()}}>
                        {this.state.hideList ===true ?'Hide list User' :'Show list User'}
                    </span>
                </div>
                {this.state.hideList &&
                    <div>
                        {
                            listUser.map((user, index) => {
                                // console.log(user);
                                return (
                                    <div key={user.id} className={user.age > 22 ? "green" : "red"}>
                                        <div>My name is {user.name} </div>
                                        <div>I'm am {user.age}</div>
                                        <div>I'm live {user.address}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>

        )
    }
}
export default DisplayInfor;