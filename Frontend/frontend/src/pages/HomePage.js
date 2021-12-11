import { Component } from "react";
import { Link } from "react-router-dom";
import postsAPI from "../api/postsAPI";
import Posts from "../components/Posts";
import UserContext from "../contexts/UserContext";

class HomePage extends Component {
  state = {
    posts: [],
  };

  getPosts = async () => {
    try {
      let token = this.context ? this.context.token : null;
      if (token) {
        let postsData = await postsAPI.getPosts(token);
        this.setState({ posts: postsData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getPosts();
  }

  renderWelcome() {
    if (!this.context) {
      return (
        <Link to="/login">
          <button>Login</button>
        </Link>
      );
    }
    let postElements = this.state.posts.map((post, index) => {
      return (
        <li key={`post-${index}`}>
          <Posts post={post} />
        </li>
      );
    });
    return (
      <div>
        <h2>Welcome to your Posts App {this.context.user.email}</h2>
        <ul className="simple-list">{postElements}</ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.renderWelcome()}
      </div>
    );
  }
}

HomePage.contextType = UserContext;

export default HomePage;
