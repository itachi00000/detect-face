/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import TachLogo from './tachyons-logo.jpg';
import './Profile.css';

//
import { getServerUrl } from '../../utils/server-url';

const SERVER_URL_STRING = getServerUrl();

// [] TODO: do post req for new data. ex.pet, age, username
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    // localized state, bcoz due re-render of due to drilled props
    this.state = {
      username: user.username,
      age: user.age,
      pet: user.pet
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onProfileSaved = this.onProfileSaved.bind(this);
  }

  onFormChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  // TODO: stateData vs data
  onProfileSaved(stateData) {
    const { props } = this;
    const token = window.sessionStorage.getItem('jwt');

    fetch(`${SERVER_URL_STRING}/profile/${props.user.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ formInput: stateData })
    })
      .then((data) => {
        // turn-off
        props.toggleModal();
        // {...mainData, ...addedData }
        // setting user
        props.loadUser({ ...props.user, ...data }); // {...props.user, ...data}
      })
      .catch(console.error);
  }

  render() {
    console.log('this.state', this.state);
    const { state, props } = this;

    return (
      <div className="profile-modal">
        <article className="br3 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw6 center bg-white">
          <main className="pa4 black-80 w-80">
            <img src={TachLogo} className="h3 w3 dib" alt="avatar" />
            <h1>
              {props.user.name.slice(0, 1).toUpperCase() +
                props.user.name.slice(1)}
            </h1>
            <p className="lead">Image Submitted {props.user.entries}</p>
            <p>
              Member since: {new Date(props.user.joined).toLocaleDateString()}
            </p>
            <hr />
            <label className="mt2 fw6" htmlFor="username">
              UserName:
              <input
                className="pa2 ba w-100"
                type="text"
                name="username"
                placeholder="john"
                onChange={this.onFormChange}
                value={state.username}
              />
            </label>
            <label className="mt2 fw6" htmlFor="user-age">
              Age:
              <input
                className="pa2 ba w-100"
                type="text"
                name="age"
                placeholder="44"
                onChange={this.onFormChange}
                value={state.age}
              />
            </label>

            <label className="mt2 fw6" htmlFor="user-pet">
              Pet:
              <input
                className="pa2 ba w-100"
                type="text"
                name="pet"
                placeholder="dragon"
                onChange={this.onFormChange}
                value={state.pet}
              />
            </label>
            <div
              className="mt4"
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <button
                type="button"
                className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
                // saving at render-area, or handler-area??
                // when accessing/capturing this.state
                onClick={() => this.onProfileSaved(state)}
              >
                Save
              </button>
              <button
                type="button"
                className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
                onClick={props.toggleModal}
              >
                Cancel
              </button>
            </div>
          </main>

          <div
            tabIndex="0"
            role="button"
            className="modal-close"
            // onKeyPress={() => {}}
            onClick={props.toggleModal}
          >
            &times;
          </div>
        </article>
      </div>
    );
  }
}
