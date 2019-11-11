import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./postslist.css";
export default class PostsList extends Component {
  render() {
    return (
      <div className="post-list">
        <ul>
          <li className="title">{this.props.post.title}</li>
          <li className="body">{this.props.post.content}</li>
          <li>
            <Link to={`/${this.props.post.id}`}>
              <button>Read</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
PostsList.propTypes = {
  post: PropTypes.object.isRequired
};
