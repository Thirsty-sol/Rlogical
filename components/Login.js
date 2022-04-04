import React, { Component } from "react";
import { logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { connect, useDispatch } from "react-redux";
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  setEmail = e => {
    this.setState({
      email: e.target.value
    });
  }
  setPassword = e => {
    this.setState({
      password: e.target.value
    });
  }
  render(){
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={this.state.email}
          onChange={e => this.setEmail(e)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={this.state.password}
          onChange={(e) => this.setPassword(e)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => this.props.logInWithEmailAndPassword(this.state.email, this.state.password)}
        >
          Login
        </button>
      </div>
    </div>
  );
  };
}
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= {
  logInWithEmailAndPassword
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

 