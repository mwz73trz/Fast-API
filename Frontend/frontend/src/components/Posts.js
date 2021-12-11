import { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  render() {
    return (
      <span>
        <Link to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link>
      </span>
    );
  }
}

export default Posts;
