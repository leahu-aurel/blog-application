import React, { Component } from "react";
import { db, firebase } from "../base";
import { Redirect } from "react-router-dom";
export default class CreatePost extends Component {
  state = {
    signedIn: true,
    title: "",
    content: ""
  };
  componentDidMount() {
    this.fireBaseListener = firebase.auth().onAuthStateChanged(user => {
      console.log("createPost.jsx");
      console.log(user);
      if (user) {
        console.log("Setting to true");
        this.setState({ signedIn: true });
      } else {
        this.setState({ signedIn: false });
      }
    });
  }
  componentWillUnmount() {
    console.log("Unsubscribing listeners");
    this.fireBaseListener && this.fireBaseListener();
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let postsRef = db.collection("posts");
    let time = Date.now().toString();
    let post = {
      id: time,
      title: this.state.title,
      content: this.state.content
    };
    postsRef.doc(time).set(post);
    this.props.createPost(post);
    this.props.history.push("/");
  };
  render() {
    console.log(`this.state.signedIn = ${this.state.signedIn}`);

    return this.state.signedIn ? (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Post</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Post Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">Post Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    ) : (
      <Redirect to="/signin" />
    );
  }
}
