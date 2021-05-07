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
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
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
  }

  // input for image url
  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // change onPictureSubmitBtn
  onButtonSubmit() {
    const { input, user } = this.state;

    this.setState({ imageUrl: input });

    fetch(`${SERVER_URL_STRING}/imageurl`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input
      })
    })
      .then(resp => resp.json())
      .then(response => {
        if (response) {
          fetch(`${SERVER_URL_STRING}/image`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id
            })
          })
            .then(resp => resp.json())
            .then(count => {
              this.setState(prevState => ({
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
    // if signout, reset state
    if (route === 'signout') {
      this.setState(inititalState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  }

  // eslint-disable-next-line class-methods-use-this
  calculateFaceLocation(data) {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  }

  displayFaceBox(box) {
    this.setState({ box });
  }

  loadUser(data) {
    this.setState(prevState => ({
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

  render() {
    const { imageUrl, box, route, isSignedIn, user } = this.state;

    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          user={user}
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
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
