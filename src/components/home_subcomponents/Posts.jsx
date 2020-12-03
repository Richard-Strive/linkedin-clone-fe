import React, { Component } from "react";
import "../css/Post.css";
import PostContent from "./PostContent";
import { Spinner } from "react-bootstrap";
class Posts extends Component {
  state = { posts: [], isLoading: true };

  getPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/ ",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          },
        }
      );

      if (response.ok) {
        const posts = await response.json();
        console.log("posts", posts);
        this.setState({ posts: posts.reverse(), isLoading: false });
      }
    } catch (err) {
      this.setState({ isLoading: false });
      console.log(err);
    }
  };

  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { posts, isLoading } = this.state;
    return (
      <div>
        {isLoading && (
          <Spinner
            className="main-page-spinner"
            animation="border"
            variant="primary"
          />
        )}
        {posts.map((post) => {
          return <PostContent post={post} />;
        })}
      </div>
    );
  }
}

export default Posts;
