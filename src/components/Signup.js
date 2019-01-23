import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="Forms">
        <h1 className="Loginh1">Sign Up</h1>
        <form>
        <label>
            First Name
            <br/>
            <input type="text" name="First Name" />
          </label>
          <br/>
          <label>
            Last Name
            <br/>
            <input type="text" name="Last Name" />
          </label>
          <br/>
          <label>
            Email
            <br/>
            <input type="text" name="Email" />
          </label>
          <div>
          <label>
            Password
            <br/>
            <input type="text" name="Password" />
          </label>
          </div>
          <br/>
          <div>
            <input type="checkbox" id="emailList" name="signUp" value="newsletter" />
            <label for="emailList">Would you like to recieve news updates via email?</label>
          </div>
          <button className="btn btn-secondary my-2 my-sm-0">Create User</button>
        </form>
      </div>
    );
  }
}
export default Signup;