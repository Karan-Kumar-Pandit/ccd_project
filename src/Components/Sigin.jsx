import React from "react";
import "./sigin.css";
import Footer from "./Footer";
import ReactFormInputValidation from "react-form-input-validation";

class Sigin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        password: "",
      },
      errors: {},
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
      name: "required",
      email: "required|email",
      password: "required|numeric|digits_between:10,12",
    });
    this.form.onformsubmit = (fields) => {
      // Do you ajax calls here.
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="sigincontainer">
          <div className="app-wrapper">
            <div>
              <h2 className="tittle">Create Account</h2>
            </div>
            <form className="form-wrapper" onSubmit={this.form.handleSubmit}>
              <div className="name">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
                />
                <p className="error">
                  {this.state.errors.name ? this.state.errors.name : ""}
                </p>
              </div>
              <div className="email">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                />
                <p className="error">
                  {this.state.errors.email ? this.state.errors.email : ""}
                </p>
              </div>
              <div className="password">
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.password}
                />
                <p className="error">
                  {this.state.errors.password ? this.state.errors.password : ""}
                </p>
              </div>

              <button className="submit" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Sigin;
