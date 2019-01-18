import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="Forms">
      <h1 className="Loginh1">Login</h1>
        <form>
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
          <br/>
          Or
          <br/>
        </form>
        <a href="./Signup"><button className="btn btn-secondary my-2 my-sm-0">Create User</button></a>
      </div>
    );
  }
}
export default Login;
