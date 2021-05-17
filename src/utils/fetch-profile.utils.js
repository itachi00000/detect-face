const { getServerUrl } = require('./server-url');

const SERVER_URL_STRING = getServerUrl();

const fetchProfile = ({ data, ev }) => {
  if (!data || !SERVER_URL_STRING || !ev) {
    throw Error('fetchProfile-fn Error');
  }

  //
  const profId = data.userId || data.id;

  return fetch(`${SERVER_URL_STRING}/profile/${profId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`
    }
  })
    .then((resp) => resp.json())
    .then((user) => {
      console.log('resp-user', user);
      if (user && user.email) {
        console.log('load', ev.loadUser(user));
        ev.loadUser(user);
        ev.onRouteChange('home');
      }
    })
    .catch((error) => console.error('fetch-profile-fn Error', error));
};

module.exports = { fetchProfile };
