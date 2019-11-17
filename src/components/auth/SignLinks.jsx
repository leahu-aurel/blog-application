import React, { Component } from "react";
import { firebase } from "../../base";
import { Link } from "react-router-dom";
export default class SignLinks extends Component {
  state = { signedIn: true };

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ signedIn: true });
      } else {
        this.setState({ signedIn: false });
      }
    });
  }
  render() {
    return this.state.signedIn ? (
      <React.Fragment>
        <li>
          <Link to="/create">New Blog</Link>
        </li>
        <li>
          <Link to="/" onClick={this.signOut}>
            Sign Out
          </Link>
        </li>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </React.Fragment>
    );
  }
}
