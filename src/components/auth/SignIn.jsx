import React, { Component } from "react";
import { firebase } from "../../base";

export default class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        // ...
      });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <input type="text" id="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}
