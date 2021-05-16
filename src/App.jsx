/* eslint-disable no-nested-ternary */
import React from 'react';
import Particles from 'react-particles-js';

// components
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Modal from './components/Modal/Modal';
import Profile from './components/Profile/Profile';

//
import { getServerUrl } from './server-url';

// css
import './App.css';

const SERVER_URL_STRING = getServerUrl();

// styling
const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

// initial state
const inititalState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin', // signin
  isSignedIn: false, // false,
  isProfileOpen: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
    age: '',
    pet: '',
    username: ''
  }
};

// main
export default class App extends React.Component {
  constructor() {
    super();
    this.state = inititalState;

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
    this.loadUser = this.loadUser.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    // this.onSavedUserDataClick = this.onSavedUserDataClick.bind(this);
  }

  componentDidMount() {
    console.log('mount');
    const token = window.sessionStorage.getItem('jwt');

    if (token) {
      fetch(`${SERVER_URL_STRING}/signin`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // stndrd: 'Bearer token'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data && data.id) {
            // fetchById
            fetch(`${SERVER_URL_STRING}/profile/${data.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              }
            })
              .then((resp) => resp.json())
              .then((user) => {
                if (user && user.email) {
                  this.loadUser(user);
                  this.onRouteChange('home');
                }
              })
              .catch((err) => {
                console.error('mount, GET @ profile/1 :', err);
              });
          }
        })
        .catch((err) => {
          console.error('mount, GET @ signin :', err);
        });
    }
  }

  // input for image url
  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // change onPictureSubmitBtn
  onButtonSubmit() {
    const { input, user } = this.state;

    // get token
    const token = window.sessionStorage.getItem('jwt');

    this.setState({ imageUrl: input });

    fetch(`${SERVER_URL_STRING}/imageurl`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        input
      })
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response) {
          fetch(`${SERVER_URL_STRING}/image`, {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              id: user.id,
              email: user.email
            })
          })
            .then((resp) => resp.json())
            .then((count) => {
              this.setState((prevState) => ({
                user: { ...prevState.user, entries: count }
              }));
            })
            .catch(() => console.log('error at clarifai fetcing'));
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(() => console.log('Error at Clarifai'));
  }

  //
  onRouteChange(route) {
    console.log('routechange');
    // if signout, reset state
    if (route === 'signout') {
      // return, bcoz it changes route
      window.sessionStorage.removeItem('jwt');
      return this.setState(inititalState);
    }

    // when signin
    if (route === 'home') {
      this.setState({ isSignedIn: true });
    }

    // default
    return this.setState({ route });
  }

  // eslint-disable-next-line class-methods-use-this
  calculateFaceLocation(data) {
    if (!data && data.outputs) {
      return null; // ? need test
    }

    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = parseInt(image.width, 10);
    const height = parseInt(image.height, 10);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  }

  displayFaceBox(box) {
    if (box) {
      this.setState({ box });
    }
  }

  loadUser(data) {
    console.log('loaduser');

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    }));
  }

  toggleModal() {
    this.setState((prevState) => ({
      isProfileOpen: !prevState.isProfileOpen
    }));
  }

  // onSavedUserDataClick({}) {}

  render() {
    const {
      imageUrl,
      box,
      route,
      isSignedIn,
      user,
      isProfileOpen
    } = this.state;

    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          user={user}
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
          toggleModal={this.toggleModal}
        />
        {isProfileOpen && (
          <Modal>
            <Profile
              user={user}
              onSavedUserDataClick={this.onSavedUserDataClick}
              toggleModal={this.toggleModal}
              loadUser={this.loadUser}
              // isProfileOpen={isProfileOpen}
            />
          </Modal>
        )}

        {route === 'home' ? (
          <>
            <Logo />
            <Rank entries={user.entries} name={user.name} />
            <ImageLinkForm
              onButtonSubmit={this.onButtonSubmit}
              onInputChange={this.onInputChange}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </>
        ) : route === 'register' ? (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}
