import React, { Component } from "react";

class Signup extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const data = JSON.stringify({...this.state})
    fetch ('http://localhost:8000/users', {
      method: 'POST',
      body: data,
      // mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  render() {
    return (
      <div className="Forms">
        <h1 className="Loginh1">Sign Up</h1>
        <form>
        <label>
            First Name
            <br/>
            <input type="text" name="First Name" 
            onChange={e => this.setState({firstName: e.target.value})}
            />
          </label>
          <br/>
          <label>
            Last Name
            <br/>
            <input type="text" name="Last Name" 
            onChange={e => this.setState({lastName: e.target.value})}
            />
          </label>
          <br/>
          <label>
            Email
            <br/>
            <input type="text" name="Email" 
            onChange={e => this.setState({email: e.target.value})}
            />
          </label>
          <div>
          <label>
            Password
            <br/>
            <input type="text" name="Password" 
            onChange={e => this.setState({password: e.target.value})}
            />
          </label>
          </div>
          <br/>
          {/* <div>
            <input type="checkbox" id="emailList" name="signUp" value="newsletter" />
            <label htmlFor="emailList">Would you like to recieve news updates via email?</label>
          </div> */}
          <button onClick={(e) => {this.handleSubmit(e)}} className="btn btn-secondary my-2 my-sm-0">Create Account</button>
        </form>
      </div>
    );
  }
}
export default Signup;