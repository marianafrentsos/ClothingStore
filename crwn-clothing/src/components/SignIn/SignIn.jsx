import React from "react";
import FormInput from "../FormInput/FormInput.jsx";
import "./SignIn.scss";
import CustomButton from "../CustomButton/CustomButton.jsx";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", passowrd: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signIn">
        <h2>I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            rquired="true"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.email}
            handleChange={this.handleChange}
            rquired="true"
            label="password"
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
