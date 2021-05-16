import React from 'react';
import axios from 'axios';

import { getServerUrl } from '../../server-url';
import './Signin.css';

const SERVER_URL_STRING = getServerUrl();

//

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
    this.saveAuthTokenInSession = this.saveAuthTokenInSession.bind(this);
  }

  // static getDerivedStateFromProps() {}

  onEmailChange(event) {
    this.setState({ signInEmail: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ signInPassword: event.target.value });
  }

  onSubmitSignIn() {
    const { props, state } = this;
    const { loadUser, onRouteChange } = this.props;
    const { signInEmail, signInPassword } = this.state;

    return fetch(`${SERVER_URL_STRING}/signin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.signInEmail,
        password: state.signInPassword
      })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.userId && data.success === true) {
          console.log('data', data);
          this.saveAuthTokenInSession(data.token);

          // return fetch(`${SERVER_URL_STRING}/profile/${data.userId}`, {
          //   method: 'GET',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   }
          // })

          return axios
            .get(`${SERVER_URL_STRING}/profile/${data.userId}`, {
              headers: {
                authorization: `Bearer ${data.token}`
              }
            })
            .then((resp) => {
              const { user } = resp.data;

              if (user && user.email) {
                props.loadUser(user);
                props.onRouteChange('home');
              }
            })
            .catch((error) => {
              // getting error message
              // ex. let errorMsg = ''

              console.log(error); // this is wrong
              if (error.response) {
                // The request was made and
                // client receivied an error response (5xx, 4xx)

                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

                // const { data, status, headers } = error.response;

                // ex. errorMsg = data.error || data.genError.errorMsg
              } else if (error.request) {
                // client never received a response,
                // or request never left (network error)
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);

                // ex. errorMsg = error.message
                // OR ex. errorMsg = `${error.name}: ${error.message}`
              } else {
                // anything else
                console.log('Error', error.message);
              }
              // console.log('error config ----')
              // console.log(error.config);
              console.log('errorObj: -----');
              console.dir(error);
              // OR;
              console.error(error);
              // OR;
              console.error(JSON.stringify(error, null, 2));

              // ex. return setValue({ error: errorMsg, loading: false })
            });
        }

        throw Error('no userid-signin');
      })
      .catch((err) => console.log('signin-error', err));
  }

  // eslint-disable-next-line class-methods-use-this
  saveAuthTokenInSession(token) {
    if (window.sessionStorage) {
      // for one tab only
      window.sessionStorage.setItem('jwt', token);

      // OR window.localStorage.setItem('jwt', token)
    }
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
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white hover-black2 w-100"
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
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white hover-black2 w-100"
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
