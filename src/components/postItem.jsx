import React, { Component } from "react";
import { db } from "../base";

export default class PostItem extends Component {
  handleClick = post => {
    console.log(post.id);
    db.collection("posts")
      .doc(post.id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
    console.log(this.props);
    this.props.deletePost(post);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="post-list">
        <ul>
          <li className="title">{this.props.post.title}</li>
          <li
            className="body"
            style={{ overflow: "visible", maxHeight: "none" }}
          >
            {this.props.post.content}
          </li>
          <li>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => this.handleClick(this.props.post)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
