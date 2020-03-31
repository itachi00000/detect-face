import React from 'react';

import './App.css';
import Particles from 'react-particles-js';

// API
import Clarifai from 'clarifai';

// components
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

// API
const app = new Clarifai.App({
  apiKey: 'api-key'
});

// styling
const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onButtonSubmit() {
    this.setState(prevState => ({ imageUrl: prevState.input }));

    app.models.predict(Clarifai.FACE_DETECT_MODEL, '').then(
      response => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      error => {}
    );
  }

  render() {
    const { imageUrl } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onButtonSubmit={this.onButtonSubmit}
          onInputChange={this.onInputChange}
        />
        <FaceRecognition imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
