import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
