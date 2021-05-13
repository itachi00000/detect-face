import React from 'react';

import ProfileIcon from '../Profile/ProfileIcon';

export default function Navigation({ onRouteChange, isSignedIn, toggleModal }) {
  // signin, signout, register
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ProfileIcon
          onRouteChange={onRouteChange}
          isSignedIn={isSignedIn}
          toggleModal={toggleModal}
        />
      </nav>
    );
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        role="presentation"
        onClick={() => onRouteChange('signin')}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign In
      </p>
      <p
        role="presentation"
        onClick={() => onRouteChange('register')}
        className="f3 link dim black underline pa3 pointer"
      >
        Register
      </p>
    </nav>
  );
}
