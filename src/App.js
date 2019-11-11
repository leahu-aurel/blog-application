import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PostsList from "./components/postsList";
import NavBar from "./components/NavBar";
import PostItem from "./components/postItem";
import CreatePost from "./components/CreatePost";
import { db } from "./base";

export default class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    db.collection("posts")
      .get()
      .then(querySnapshot => {
        const posts = querySnapshot.docs.map(doc => doc.data());
        // doc.data() is never undefined for query doc snapshots
        console.log(posts);
        this.setState({ posts });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }

  createPost = post => {
    this.setState({ posts: [...this.state.posts, post] });
  };

  deletePost = post => {
    console.log(post);
    let posts = [...this.state.posts];
    console.log(this.state.posts);
    posts = posts.filter(item => item.id !== post.id);
    console.log(posts);
    this.setState({ posts });
  };
  render() {
    let { posts } = this.state;
    return (
      <Router>
        <div>
          <NavBar />{" "}
          <Switch>
            <Route
              exact
              path="/create"
              render={props => (
                <CreatePost {...props} createPost={this.createPost} />
              )}
            />
            {posts.map(post => (
              <Route
                key={post.id}
                exact
                path={"/" + post.id}
                render={props => (
                  <PostItem
                    {...props}
                    key={post.id}
                    post={post}
                    deletePost={this.deletePost}
                  />
                )}
              />
            ))}
            <Route exact path="/">
              {posts.map(post => (
                <PostsList
                  key={post.id}
                  post={post}
                  redirect={this.redirectToPost}
                />
              ))}{" "}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  redirectToPost = post => {
    console.log(`/${post.id}`);
    return (
      <div>
        <Redirect to={`/${post.id}`} />
      </div>
    );
  };
}
