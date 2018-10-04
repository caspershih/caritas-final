import React from "react";
import "../../pages/Dashboard/User.css";
import axios from 'axios';


class UserWelcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        User: [{
        firstName: ''
        }]
    };
}

componentDidMount() {
  axios.get('/user/profile')
  .then(res => {
      this.setState({ User: res.data});
  });
}
   
    render() {
      return (
        <main>
        {this.state.User.map((User, id) =>
          <div name='id' data-index={id}>
             <label className="loginlabel">Welcome {User.firstName}! </label>
          </div>)}
        </main>
      );
    }
  }

export default UserWelcome;