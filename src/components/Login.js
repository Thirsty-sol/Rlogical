import React, { Component } from "react";
import { logInWithEmailAndPassword} from "./firebase";
import "./Login.css";
import { connect } from "react-redux";
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
  registerUser = async (userName, password) => {
    await this.props.logInWithEmailAndPassword({userName, password});
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
          onClick={() => this.registerUser(this.state.email, this.state.password)}
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
const mapDispatchToProps = (dispatch) => {
  return {
    logInWithEmailAndPassword: (email, password) => { logInWithEmailAndPassword(email, password) }
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

 