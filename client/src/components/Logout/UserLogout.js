import React, { Component } from "react";
import "../../pages/Dashboard/User.css";
import UserLogoutButton from '../../components/Logout/UserLogoutButton';
import axios from 'axios';


class UserLogout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        User: [{
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: ''
    }],
};
      this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
  axios.get('/user/profile')
  .then(res => {
      this.setState({ User: res.data});
  });
}
    handleSubmit(event) {
      event.preventDefault();
    }
   
    render() {
      return (
        <div className="searchRow">
        {this.state.User.map((User, index) =>
          <div className="searchform"  name='id' data-index={index}>
             <label className="loginlabel">Welcome {User.firstName}! </label>
            <UserLogoutButton />
          </div>)}
        </div>
      );
    }
  }

export default UserLogout;