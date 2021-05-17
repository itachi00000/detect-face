import React from 'react';

import { getServerUrl } from '../../utils/server-url';

const SERVER_URL_STRING = getServerUrl();

// main
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onSubmitSignIn() {
    const { loadUser, onRouteChange } = this.props;
    const { name, email, password } = this.state;

    fetch(`${SERVER_URL_STRING}/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
      .then((resp) => {
        console.log(resp);
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then((data) => {
        loadUser(data);
        onRouteChange('home');
      })
      .catch((err) => console.log('Error at Register.jsx', err));
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <article className="br3 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                    value={name}
                  />
                </label>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    value={email}
                  />
                </label>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    value={password}
                  />
                </label>
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}
