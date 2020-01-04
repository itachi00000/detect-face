import React from 'react';
// import Tilt from 'react-tilt';

import logo from './logo.png';
import './Logo.css';

export default function Logo() {
  return (
    <div className="ma4 mt0">
      {/* <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      > */}
      <div className="Tilt-inner">
        <img style={{ paddingTop: '5px' }} src={logo} alt="logo" />
      </div>
      {/* </Tilt> */}
    </div>
  );
}
