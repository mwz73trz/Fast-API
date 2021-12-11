import { Component } from "react";
import postsAPI from "../api/postsAPI";

class LoginPage extends Component {
  handleLogin = async (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    let credentials = {
      email: email,
      password: password,
    };

    try {
      let data = await postsAPI.doLogin(credentials);
      if (data) {
        this.props.completeLogin(data);
        this.props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleLogin}>
          <label>Email:</label>
          <input name="email" />
          <br />
          <label>Password:</label>
          <input name="password" type="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
