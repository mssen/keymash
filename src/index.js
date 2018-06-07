import React from 'react';
import ReactDOM from 'react-dom';

import baseStyles from './baseStyles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

baseStyles();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
