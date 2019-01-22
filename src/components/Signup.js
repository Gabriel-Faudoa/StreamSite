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
          <button className="btn btn-secondary my-2 my-sm-0">Login</button>
        </form>
      </div>
    );
  }
}
export default Signup;