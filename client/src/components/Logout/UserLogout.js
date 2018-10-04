import React from "react";
import "../../pages/Dashboard/User.css";
import UserLogoutButton from '../../components/Logout/UserLogoutButton';
import UserWelcome from '../../components/Logout/UserWelcome';


class UserLogout extends React.Component {
  constructor(props){
    super(props);
    
      this.handleSubmit = this.handleSubmit.bind(this);
}

    handleSubmit(event) {
      event.preventDefault();
    }
   
    render() {
      return (
        <div className="searchRow">
       
          <div className="searchform">
            <UserWelcome />
            <UserLogoutButton />
          </div>
        </div>
      );
    }
  }

export default UserLogout;