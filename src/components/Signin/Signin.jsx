import React from 'react';

import { getServerUrl } from '../../server-url';

const SERVER_URL_STRING = getServerUrl();

// main
export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
  }

  onEmailChange(event) {
    this.setState({ signInEmail: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ signInPassword: event.target.value });
  }

  onSubmitSignIn() {
    const { loadUser, onRouteChange } = this.props;
    const { signInEmail, signInPassword } = this.state;

    fetch(`${SERVER_URL_STRING}/signin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        loadUser(data);
        onRouteChange('home');
      })
      .catch(err => console.log('Error at Signin Comp. ,,', err));
  }

  render() {
    const { onRouteChange } = this.props;
    const { signInPassword, signInEmail } = this.state;
    return (
      <article className="br3 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    value={signInEmail}
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
                    value={signInPassword}
                  />
                </label>
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                role="presentation"
                onClick={() => onRouteChange('register')}
                className="f6 link dim black db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}
