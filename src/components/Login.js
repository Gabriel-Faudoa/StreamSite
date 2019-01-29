import React, { Component } from "react";

class Login extends Component {

state = {
  email: "",
  password: ""
}

handleSubmit = (e) => {
  e.preventDefault()
  const data = JSON.stringify({...this.state})
  fetch ('http://localhost:3000', {
    method: 'POST',
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
}


  render() {
    return (
      <div className="Forms">
      <h1 className="Loginh1">Login</h1>
        <form>
          <label>
            <br/>
            <input 
            type="text" 
            name="Email" 
            placeholder="Email"
            onChange={e => this.setState({email: e.target.value})}
            />
          </label>
          <div>
          <label>
            <br/>
            <input 
            type="password" 
            name="Password" 
            placeholder="Password"
            onChange={e => this.setState({password: e.target.value})}
            />
          </label>
          </div>
          <button onClick={(e) => {this.handleSubmit(e)}} className="btn btn-secondary my-2 my-sm-0">Login</button>
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
