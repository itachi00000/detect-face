import React from 'react';

export default function Navigation({ onRouteChange, isSignedIn }) {
  // signin, signout, register
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          role="presentation"
          onClick={() => onRouteChange('signout')}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
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
